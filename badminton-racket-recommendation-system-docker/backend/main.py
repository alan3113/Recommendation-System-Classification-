from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.models.response import format_response
import logging
from app.core.config import Settings
from app.routes.model_routes import router as model_router
from app.routes.racket_routes import router as racket_router
from app.utlis.badminton_recommendation import train_model
from app.db.migration import migration



# Loading Config
settings = Settings()

# Logging Config
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# FastAPI Initialization
app = FastAPI()
#app = FastAPI(debug=True)

#training constants
global SCALAR, LABEL_ENCODER,CLF

# StartUp Event
@app.on_event("startup")
async def startup_event():
    
    logger.info("Application is starting...")
    # Database Migrations
    migration()
    logger.info("Started model training..")
    CLF,SCALER,LABEL_ENCODERS = train_model()
    logger.info("Model training finished..")



# Shutdown Event
@app.on_event("shutdown")
async def shutdown_event():
    logger.info("Application is shutting down...")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware for logging and error handling
@app.middleware("http")
async def middleware(request: Request, call_next):
    # Logging request details
    logger.info(f"Request from : {request.client}")
    logger.info(f"End Point : {request.url}")
    
    response = await call_next(request)

    # Logging response details
    logger.info(f"Response status code: {response.status_code}")

    # Error Handling
    if response.status_code >= 400:
        if isinstance(response, JSONResponse):
            logger.error(f"Error: {response.status_code} - {response.content.decode('utf-8')}")
        else:
            logger.error(f"Error: {response.status_code}")
    return response

# Routes
app.include_router(model_router, prefix="/model", tags=["model"])
app.include_router(racket_router, prefix="/racket", tags=["racket"])



# Custom Exception Handler
@app.exception_handler(HTTPException)
async def http_exception_handler(request: Request, exc: HTTPException):
    logger.error(f"HTTP Exception: {exc}")
    return JSONResponse(content=format_response(exc.status_code, exc.detail), status_code=exc.status_code)



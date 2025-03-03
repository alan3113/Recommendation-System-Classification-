from fastapi import APIRouter, Depends
from app.models.recommendation import * 
import app.services.model_services as model_services

router = APIRouter()

@router.post("/existing_user")
def recommendation_for_exixting_user(request : ExistingUserRequest):
    return model_services.reccommend_for_existing(request)


@router.post("/new_user")
def recommendation_for_new_user(request : NewUserRequest ):
    return model_services.reccommend_for_new(request)
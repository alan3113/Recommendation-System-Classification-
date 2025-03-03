
import logging

from fastapi import HTTPException
from app.models.recommendation import *
from app.models.response import format_response
from app.utlis.badminton_recommendation import *
from app.db.session import get_db
from app.models.racket import Racket


def list_rackets( name: str ):
    with get_db() as cursor:

        try:
            cursor.execute("SELECT model_name FROM rackets WHERE model_name ILIKE %s LIMIT 10", (name + '%',))
            rows = cursor.fetchall()
            
            # Store the fetched data in a list
            racket_models = [row[0] for row in rows]
        except Exception as e:
            return format_response(500, str(e))
        return format_response(200, "rackets fetched Successfully", racket_models)
    
def get_racket_details(name: str):
    with get_db() as cursor:
        try:
            query = "SELECT * FROM rackets WHERE model_name = %s LIMIT 1;"
            cursor.execute(query, (name,))  # Only one argument (name)
            row = cursor.fetchone()

            if not row:
                raise HTTPException(status_code=400, detail="Racket not found")

            # Convert tuple to dictionary using column names
            column_names = [desc[0] for desc in cursor.description]
            racket_data = dict(zip(column_names, row))  # Use column_names instead of Racket.__fields__

            # Assuming Racket is a Pydantic model (replace with your model creation logic)
            racket = Racket(**racket_data)  # Create Pydantic model instance

            return format_response(200, "Racket details fetched successfully", racket)
        except Exception as e:
            logging.error(str(e))
            return format_response(500, str(e))

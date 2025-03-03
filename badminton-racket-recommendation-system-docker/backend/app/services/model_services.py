
import logging
from typing import List,Dict

from fastapi import HTTPException
from app.models.recommendation import *
from app.models.response import format_response
from app.utlis.badminton_recommendation import *
from app.utlis.badminton_recommendation import scaler,label_encoders,clf
from app.db.session import get_db
from app.models.racket import Racket


def reccommend_for_existing(request: ExistingUserRequest):
    try:
        logging.info("request data %s:",request.rackets[0].name)
        data = convert_to_dict_format(request)
        logging.info("converted data %s:",data)
    except Exception as err:
        return format_response(code=200,message="Currently no recomendation")

    recommendation ,_ = pred_model(clf=clf,scaler=scaler,label_encoders=label_encoders,badminton_ratings=data)
    logging.info("Recomo : %s",recommendation)
    return get_racket_detailed_list(recommendation.tolist())


def reccommend_for_new(request: NewUserRequest):
    try:
        price = request.price
        experience = request.experience
        playing_style = request.playing_style
        logging.info(playing_style,price,experience)
        recommendation,_ = unexperienced_user(clf=clf,scaler=scaler,label_encoders=label_encoders,playing_level=experience,playing_style=playing_style,price=price)
    except Exception as err:
        return format_response(code=200,message="Currently no recomendation")

    return get_racket_detailed_list(recommendation.tolist())

def convert_to_dict_format(rackets: ExistingUserRequest):
    return {
        "badminton_ratings": [
            {"name": racket.name, "rating": racket.rating} for racket in rackets.rackets
        ]
    }



def get_racket_detailed_list(rackets: List[str]):
    # Remove duplicate racket names
    unique_rackets = set(rackets)

    if not unique_rackets:
        return format_response(400, detail="No unique racket names provided")

    with get_db() as cursor:
        try:
            # Create placeholders based on the number of unique rackets
            placeholders = ','.join(['%s'] * len(unique_rackets))
            query = f"""
                SELECT DISTINCT ON (model_name) *
                FROM rackets
                WHERE model_name IN ({placeholders})
                """
            cursor.execute(query, list(unique_rackets))  # Pass list of unique rackets
            rows = cursor.fetchall()
            logging.info(len(rows))

            # Check if any rackets were found
            if not rows:
                raise HTTPException(status_code=400, detail="No rackets found")

            # Process each row and build a list of racket details
            racket_details = []
            column_names = [desc[0] for desc in cursor.description]
            for row in rows:
                racket_data = dict(zip(column_names, row))
                # Assuming Racket is a Pydantic model (replace with your model creation logic)
                racket = Racket(**racket_data)
                racket_details.append(racket)

            return format_response(200, "Racket details fetched successfully", racket_details)
        except Exception as e:
            logging.error(str(e))
            return format_response(500, str(e))
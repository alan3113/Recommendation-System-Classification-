from fastapi import APIRouter, Depends, Query
from app.models.recommendation import * 
from app.services.racket_services import *
router = APIRouter()

@router.get("/list")
def recommendation_for_exixting_user(query: str = Query(default=None)):
    return list_rackets(query)




@router.get("/details")
def recommendation_for_new_user(racket_name: str = Query(default=None) ):
    return get_racket_details(racket_name)
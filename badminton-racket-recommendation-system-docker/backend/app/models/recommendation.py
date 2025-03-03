from pydantic import BaseModel
from typing import List

class RacketAndRatings(BaseModel):
    name: str
    rating: float

class ExistingUserRequest(BaseModel):
    rackets: List[RacketAndRatings]


class NewUserRequest(BaseModel):
    price: int
    experience: str
    playing_style : str
    
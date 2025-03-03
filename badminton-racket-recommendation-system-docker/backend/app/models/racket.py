from pydantic import BaseModel

class Racket(BaseModel):
    id: int
    model_name: str
    racket_type: str
    weight: int
    brand: str
    grip_size: str
    color: str
    tension: int
    material: str
    head_shape: str
    price: int
    playing_level: str
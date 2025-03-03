CREATE TABLE rackets (
    id SERIAL PRIMARY KEY,
    model_name TEXT,
    racket_type TEXT ,
    weight INTEGER ,
    brand TEXT ,
    grip_size TEXT ,
    color TEXT ,
    tension INTEGER ,
    material TEXT ,
    head_shape TEXT ,
    price INTEGER ,
    playing_level TEXT
);


COPY rackets(model_name, racket_type, weight, brand, grip_size, color, tension, material, head_shape, price, playing_level)
FROM '/data/final_data.csv'
WITH (FORMAT csv, HEADER true, DELIMITER ',', ESCAPE '\', NULL '');
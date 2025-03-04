import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function RatingComponent({setRating, rating}) {
  
  const [hover, setHover] = useState(null);

  return (
    <div className="w-4/7 flex flex-col items-center m-2 h-max-content">
      <div className="flex justify-center items-center">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                hidden
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="cursor-pointer transition-colors duration-200 h-inherit"
                color={ratingValue <= (hover || rating) ? "#edb72f" : "#000000"}
                size={25}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                opacity={ratingValue <= (hover || rating) ? 1 : .1}
              />
            </label>
          );
        })}
      </div>
      {/* <div className="mt-10 text-xl h-inherit">
        {rating ? <p>Your rating: {rating} stars</p> : <p>No rating given</p>}
      </div> */}
    </div>
  );
};

export default RatingComponent;

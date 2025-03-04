import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

import { useState, useEffect } from 'react';

const URL = `https://0ea3-42-104-146-32.ngrok-free.app`

const useDebounce = (value, delay, setFilteredSuggestions) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue) {
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(`${URL}/racket/list?query=${debouncedValue}`, {
            headers: {
              'accept': 'application/json',
              'ngrok-skip-browser-warning':true
            }
          });
        
          const result = await response.json();
          console.log(result.data);
          if (result.data.length) {
            setFilteredSuggestions(result.data);
          } else {
            setFilteredSuggestions([]);
          }
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }        
      };
      fetchSuggestions();
    } else {
      setFilteredSuggestions([])
    }
  }, [debouncedValue, setFilteredSuggestions]);

  return debouncedValue;
};

const InputComponent = ({ value, setValue, addRacket}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const debouncedValue = useDebounce(value, 100, setFilteredSuggestions); // Adjust the delay as needed

  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='relative flex flex-col'>
      <input
        type="text"
        className="border rounded-md text-black p-2 hover:border-blue-200 hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter racket name..."
        value={value}
        onChange={handleChange}
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 mt-10 bg-white border border-gray-300 rounded-md shadow-lg w-full">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setFilteredSuggestions([])
                addRacket(suggestion);
              }}
              className="px-4 py-2 text-black cursor-pointer hover:bg-gray-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputComponent;

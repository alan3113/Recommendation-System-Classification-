import { useState } from 'react';
import questions from './Questions';
import GetRecommendationComponent from './GetRecommendationComponent';

const NewUserComponent = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (questionId, option) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);
  };

  const renderDetails = (questionId) => {
    const selectedOption = answers[questionId];
    if (selectedOption) {
      const currentQuestionOptions = questions.find(q => q.id === questionId).options;
      const optionDetails = currentQuestionOptions.find(opt => opt.value === selectedOption);
      if (optionDetails) {
        return (
          <div className="bg-gray-100 p-4 rounded-md w-full h-full">
            <h3 className="text-gray-700 text-lg font-semibold mb-2">{optionDetails.value}</h3>
            <p className="text-gray-700 md:text-sm">{optionDetails.details}</p>
          </div>
        );
      }
    }
    return null;
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isNextEnabled = answers[questions[currentQuestion].id] !== undefined;

  return (
    <div className="flex flex-col h-full w-full items-center px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="md:mb-10 lg:mb-12 w-full h-72">
        <h2 className="font-poppins text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
        <div className="flex flex-col py-3 md:flex-row md:space-x-8">
          <div className="flex flex-col space-y-4 md:w-1/2">
            {questions[currentQuestion].options.map(option => (
              <button
                key={option.value}
                className={` w-full py-2 px-4 text-left ${answers[questions[currentQuestion].id] === option.value ? 'bg-blue-500/50 rounded-md text-white ' : ' text-white'}`}
                onClick={() => handleOptionClick(questions[currentQuestion].id, option.value)}
              >
                {option.value}
              </button>
            ))}
          </div>
          <div className="w-full h-56 md:w-1/2 mt-4 md:mt-0">
            {renderDetails(questions[currentQuestion].id)}
          </div>
        </div>
        {answers[questions[currentQuestion].id] && (
          <div className="text-gray-500 mt-2 mb-4">Selected: {answers[questions[currentQuestion].id]}</div>
        )}
      </div>
      <div className="flex justify-between w-full mt-4">
        <div className=''>
          <button
            className={`py-2 px-4 bg-gray-300 text-gray-700  w-24 h-10 rounded-md ${currentQuestion === 0 ? 'hidden' : ''}`}
            onClick={handlePreviousClick}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
        </div>
        <div className=''>
        {currentQuestion < questions.length - 1 ? (
          <button
            className={`py-1 px-4 rounded-md w-24 h-10 items-end ${isNextEnabled ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={handleNextClick}
            disabled={!isNextEnabled}
          >
            Next
          </button>
        ) : (
          isNextEnabled && <GetRecommendationComponent />
        )}
        </div>
      </div>
    </div>
  );
};

export default NewUserComponent;

import React from 'react';
import close from '../assets/close.png'
const CloseComponent = ({ element, onClick }) => {
  return (
    <button
      className="w-1/7 inline-flex items-center p-1 border border-transparent text-base font-medium "
      onClick={() => onClick(element)}
    >
      <span className="mr-2">
      <img
        className="w-6 h-6 bg-slate-400 hover:bg-gray-600 hover:opacity-75 rounded-xl transition duration-300"
        src={close}
        alt="close img"
      />

      </span>
    </button>
  );
};

export default CloseComponent;

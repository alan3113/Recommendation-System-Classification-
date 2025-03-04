import React, { useState } from 'react';

const Collapsible = ({ recommendation }) => {

  return (
    <div className='flex flex-col py-5 gap-y-4 justify-start items-center h-[50%] w-[70%] border border-white backdrop-blur-sm rounded-md overflow-y-scroll'>
      {
        Object.entries(recommendation).map(([key, element]) => (
          <ButtonComponent key={key} text={element.model_name} element={element} />
        ))
      }
    </div>
  );
};

export default Collapsible;

const ButtonComponent = ({ text, element }) => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border rounded-2xl w-[90%] h-fit">
      <div
        className="flex justify-center items-center rounded-xl w-full p-2 cursor-pointer bg-gray-200"
        onClick={() => {
          setIsOpen((currentFlag) => !currentFlag);
        }}
      >
        <div className="text-lg font-medium">{text}</div>
        <svg
          className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div> 
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <TableComponent data={element} />
      </div>
  </div>

  );
};

const TableComponent = ({ data }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl p-3">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-md bg-opacity-70 border border-gray-100">
                Feature
              </th>
              <th className="px-6 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-md bg-opacity-70 border border-gray-100">
                Attribute
              </th>
            </tr>
          </thead>
          <tbody>
            { 
              (() => {
                const keys = ['id']
                const updatedObj = Object.fromEntries(Object.entries(data).filter(([key]) => !keys.includes(key)));
                return Object.entries(updatedObj).map(([key, value], index) => {
                  key = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm font-medium text-white h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
                        {key}
                      </td>
                      <td className="px-4 py-2 text-sm font-medium text-white h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">
                        {value}
                      </td>
                    </tr>
                  );
                });
              })()
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
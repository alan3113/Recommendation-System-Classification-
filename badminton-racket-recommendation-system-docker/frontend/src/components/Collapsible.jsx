import React, { useState } from 'react';

const URL = `http://10.4.6.47:3000`

const fetchSuggestions = async (racketName) => {
  try {
    const response = await fetch(`${URL}/racket/details?racket_name=${racketName}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return {}; 
  }
};

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [racketInfo, setRacketInfo] = useState({});

  const toggleCollapse = async () => {
    console.log(isOpen);
    if (!isOpen) {
      const sampleRacketInfo = await fetchSuggestions(title);
      setRacketInfo(sampleRacketInfo);
    } else {
      setRacketInfo({});
    }
    setIsOpen((currentFlag) => !currentFlag);
  };

  const TableComponent = ({ data }) => {
    return (
      <div className="flex items-center justify-center min-h-44 ">
        <div className="w- max-w-3xl p-2">
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
              {Object.entries(data).map(([key, value], index) => {
                key = key.charAt(0).toUpperCase() + key.substring(1)
                key = key.replace("_"," ")
                return (
                  <tr key={index} >
                    <td className="px-4 py-2 text-sm font-medium text-white h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">{key}</td>
                    <td className="px-4 py-2 text-sm font-medium text-white h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100">{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const numberOfButtons = 5

  return (
    <div className='flex flex-col h-screen items-center justify-center' >
      {/* Left side */}
      <div className='flex flex-row items-center overflow-x-auto max-w-[380px]'>
        {Array.from({ length: numberOfButtons }, (_, index) => (
          <button
            key={index}
            className='flex gap-x-10 px-6 mx-5 text-left text-sm font-extrabold text-white uppercase tracking-wider h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-md bg-opacity-70 border border-gray-100'
          >
            Button {index + 1}
          </button>
        ))}
      </div>


      {/* Right side */}
      <div className={`flex flex-col w-8/9 ${isOpen ? 'hidden' : 'block'}`}>
        <TableComponent data={racketInfo} />
      </div>
    </div>

    // <div className="flex gap-x-5 border rounded-xl overflow-hidden">
    //   <div
    //     className="flex w-1/2 justify-between items-center p-2 cursor-pointer bg-gray-200"
    //     onClick={toggleCollapse}
    //   >
    //     <div className="text-lg font-medium">{title}</div>
    //     <svg
    //       className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </div>
    //    <div className={` ${isOpen ? 'w-1/2 block' : 'hidden'}`}> {/*relocate container*/}
    //     <TableComponent data={racketInfo} />
    //   </div>
    // </div>
  );
};

export default Collapsible;

const ButtonComponent = ({ numberOfButtons }) => {
  return (
    <div className='flex flex-row items-center scrollable-x'>
      {Array.from({ length: numberOfButtons }, (_, index) => (
        <button
          key={index}
          className='px-6 py-3 text-left text-sm font-extrabold text-white uppercase tracking-wider h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-md bg-opacity-70 border border-gray-100'
        >
          Button {index + 1}
        </button>
      ))}
    </div>

  );
};
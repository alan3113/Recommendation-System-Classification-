import RacketComponent from "./RacketComponent.jsx";
import InputComponent from "./InputComponent.jsx";
import { useState } from "react";
import GetRecommendationComponent from './GetRecommendationComponent.jsx'

function ExistingUserComponent({setRecommendation}) {

    const [value, setValue] = useState('');
    const [racketList, setRacketList] = useState([])

    function removeRacket(racketToRemove) {
        const updatedList = racketList.filter(racket => racket !== racketToRemove);
        setRacketList(updatedList);
    }

    function handleUpdateRating(element, newRating) {
        const updatedList = racketList.filter(racket => {
            if(racket.name === element.name) {
                racket.rating = newRating
            }
            return racket;
         } );
        setRacketList(updatedList);
    }

    function handleAddRacket(newRacket) {
        const len = racketList.filter(element => element.name === newRacket).length
        if(newRacket!='' && len === 0) {
            const racketObject = {
                name : newRacket,
                rating : 0
            }
            setRacketList((prevRacketList)=> [racketObject, ...prevRacketList])    
        }
        setValue('')
    }

    return(
        <div className="flex flex-col w-full items-center gap-3">
            <div className="flex flex-col h-1/5">
                <InputComponent value={value} setValue={setValue} addRacket={handleAddRacket}/>
                {/* <button className="w-68 px-14 py-2 my-5 border border-gray-500 rounded-xl shadow-md shadow-gray-600 hover:bg-gray-700 hover:border-gray-600 hover:text-gray-200 hover:shadow-lg transition duration-300" onClick={(racket) => addRacket(racket)}>
                    Add Racket
                </button> */}
            </div>
            <div className="flex flex-col items-center w-full min-h-72">
                    {racketList.length === 0 ? (
                        <h2 className="text-xl font-semibold mb-4">Enter used racket details</h2>
                    ) : (
                        <>
                            <h2 className="text-xl font-semibold mb-4">Used rackets</h2>
                            <div className="h-50 w-10/12 max-w-full flex flex-col justidy-centers">
                                <div className="w-full h-60 overflow-y-auto border-spacing-3 border-gray-300 rounded-lg bg-slate-200 px-3">
                                    <div className="max-h-60 overflow-y-auto scrollbar-hide">
                                        {racketList.map((element, index) => (
                                        <RacketComponent key={index} element={element} onCloseClick={removeRacket} setRacketList={handleUpdateRating} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
            </div>


            {racketList.length > 2 && <GetRecommendationComponent requestBody={{"rackets":racketList}} setRecommendation={setRecommendation} userType={"existingUser"}/>}
        </div>
    )
}

export default ExistingUserComponent;
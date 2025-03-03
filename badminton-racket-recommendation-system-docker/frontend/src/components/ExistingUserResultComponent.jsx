import RacketComponent from "./RacketComponent.jsx";

function ExistingUserComponent({racketList, removeRacket, handleUpdateRating}) {
    return(
        <div className="flex flex-col h-full gap-y-5 z-10">
            <div className="h-1/2 w-full max-w-full flex items-center">
                <div className="max-h-60 w-full overflow-y-auto border-spacing-3 border-gray-300 rounded-lg bg-slate-200 px-3">
                    <div className="max-h-60 overflow-y-auto scrollbar-hide">
                        {racketList.map((element, index) => (
                        <RacketComponent key={index} element={element} onCloseClick={removeRacket} setRacketList={handleUpdateRating} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-1/2 w-full max-w-full">

            </div>
        </div>

      
    )
    
}

export default ExistingUserComponent;
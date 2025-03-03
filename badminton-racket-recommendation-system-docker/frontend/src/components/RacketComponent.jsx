import CloseComponent from "./CloseComponent";
import RatingComponent from "./RatingComponent.jsx";

function RacketComponent({element, onCloseClick, setRacketList}) {


    function handleRatingChange(newRating) {
        setRacketList(element, newRating)
    }

    return(
        <div className="max-w-full shadow-md hover:shadow-gray-400 flex justify-center items-center gap-12 border border-y-stone-300 rounded-md my-5 hover:bg-slate-300">
            <h5 className="w-4/6 text-black h-fit pl-3 overflow-x-hidden">
                {element.racketName}
            </h5>
            <div className="w-1/6 flex justify-center">
                <RatingComponent setRating={handleRatingChange} rating={element.rating} />
            </div>
            <div className="w-1/6 flex justify-center">
                <CloseComponent element={element} onClick={onCloseClick} />
            </div>
        </div>
    )
}

export default RacketComponent;
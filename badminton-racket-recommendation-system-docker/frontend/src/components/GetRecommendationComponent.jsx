
function GetRecommendationComponent({ hidden }) {
    return (
        <div>
           { !hidden && <button className="flex y-1/6 w-68 px-4 py-2 h-10 border-2 border-gray-500 rounded-xl shadow-sm shadow-gray-600 hover:bg-gray-700 hover:border-gray-600 hover:text-gray-200 hover:shadow-lg transition duration-300">
                    Get Rackets
                </button>
            }
        </div>
    )
}

export default GetRecommendationComponent;
import RecommendationComponent from "./RecommendationComponent"

function RecommendationListComponent() {
    return (
        <div className="w-2/3 overflow-x-auto border border-gray-300 rounded-lg flex flex-col justify-center">
            <div className="min-w-max p-4 flex">
                <RecommendationComponent/>
                <RecommendationComponent/>
                <RecommendationComponent/>
                <RecommendationComponent/>
                <RecommendationComponent/>
                
            </div>
        </div>
    )
}

export default RecommendationListComponent
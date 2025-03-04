const BASE_URL = 'https://0ea3-42-104-146-32.ngrok-free.app'

function GetRecommendationComponent({ requestBody, setRecommendation, userType }) {
    const endpoint = userType === "newUser"
    ? URL+'/model/new_user'
    : userType === "existingUser"
      ? URL+'/model/existing_user'
      : undefined;
    console.log(userType)
    return (
        <div>
            <button 
                className="flex y-1/6 w-68 px-4 py-2 h-10 border-2 border-gray-500 rounded-xl shadow-sm shadow-gray-600 hover:bg-gray-700 hover:border-gray-600 hover:text-gray-200 hover:shadow-lg transition duration-300"
                onClick={() => {
                    return FetchRecommendation(requestBody, setRecommendation, URL)
                }}
            >
                Get Rackets
            </button>
        </div>
    )
}

export default GetRecommendationComponent;

async function FetchRecommendation(request, setRecommendation, URL) {
    console.log(JSON.stringify(request))
    try {
        console.log(URL)
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'accept': 'application/json',
              'ngrok-skip-browser-warning': true
            },
            body: JSON.stringify(request) // Convert JavaScript object to JSON string
          });
      
        const result = await response.json();
        console.log(result.data);
        if (result.data.length) {
          setRecommendation(result.data);
        } else {
            setRecommendation([]);
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }         
};
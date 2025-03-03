import React, { useState, useEffect } from "react";
import UserButtonComponent from "./UserButtonComponent";
import ExistingUserComponent from "./ExistingUserComponent.jsx";
import NewUserComponent from "./NewUserComponent.jsx";
import RacketComponent from "./RacketComponent.jsx";
import RecommendationComponent from "./RecommendationComponent.jsx";
import RecommendationListComponent from "./RecommendationListComponent.jsx";
import ExistingUserResultComponent from "./ExistingUserResultComponent.jsx";
import Collapsible from "./Collapsible.jsx"
const userTypesConst = ['New User', 'Existing User']

function MainComponent() {
    const [userType, setUserType] = useState("");
    const [firstVisit, setFirstVisit] = useState(true);

    useEffect(() => {
        if (userType) {
            setFirstVisit(false);
        }
    }, [userType]);

    function onClick(userType) {
        setUserType(userType);
    }

    return (
        <>
            {/* Left Component */}
            <div className="left-div">
            { 

                // <Collapsible title={"JS-12"} children={"heyy"}/>
                // userType === userTypesConst[1] && 
                //     <ExistingUserResultComponent
                //         racketList={racketList}
                //         removeRacket={removeRacket}
                //         handleUpdateRating={handleUpdateRating}
                //     /> 
            }
            </div>

            {/* Right Component */}
            <div className="right-div ">
                <div className="flex flex-col h-full pt-20 w-full">
                    {firstVisit && (
                        <div className="text-center mb-40 mt-28">
                            <h1 className="text-4xl font-bold mb-4">Welcome to our product recommender</h1>
                            <p className="text-lg">Please select whether you are a new user or an existing user to proceed.</p>
                        </div>
                    )}
                    <div className=" flex align-start justify-center mb-10">
                        <UserButtonComponent buttonText={userTypesConst[0]} onClick={() => setUserType(userTypesConst[0])} current={userType} />
                        <UserButtonComponent buttonText={userTypesConst[1]} onClick={() => setUserType(userTypesConst[1])} current={userType} />
                    </div>

                    { 
                    userType === userTypesConst[1] && 
                        <ExistingUserComponent 
                
                        />
                    }
                    
                    {userType === userTypesConst[0] && <NewUserComponent />}
                    {/* <RecommendationListComponent/> */}
                </div>
            </div>  
        </>
    );
}

export default MainComponent;

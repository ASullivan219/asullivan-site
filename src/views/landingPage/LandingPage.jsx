import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../utils/RouteUtils";


const LandingPage = () => {
    return(
        <div>
            <div className="grid grid-cols-1 place-content-center w-screen h-screen">
                <div className="text-center ">
                    <div className="text-4xl sm:text-6xl font-extrabold"> Alex Sullivan</div>
                    <div className="flex justify-center m-4">
                        <Link to={ROUTE.GENERAL.HOME}>
                            <p id="enter"className="px-3">Enter Website</p>
                        </Link>
                        <Link to={ROUTE.GENERAL.SIGNIN}>
                            <p id="logon" className="px-3">Log-in</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default LandingPage
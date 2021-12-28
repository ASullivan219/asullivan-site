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
                            <a href="/" className="px-3">Enter Website</a>
                        </Link>
                        <Link to={ROUTE.GENERAL.SIGNIN}>
                            <a href="/" className="px-3">Log-in</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default LandingPage
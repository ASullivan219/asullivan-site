import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../utils/RouteUtils";

const Banner = () => {

    function clickHamburger (){
        const menu = document.getElementById("mobile-menu");
        menu.classList.toggle("hidden")


    }
    return (
    
        <div className="">
            {/* Top Banner */}
            <div className="flex justify-between">
                <Link to={ROUTE.GENERAL.HOME}>
                    <h1 className="text-4xl font-bold py-4"> AlexSullivan.me </h1>
                </Link>
                {/* Hamburger Menu */}
                <div className="md:hidden py-6 " onClick={clickHamburger}>
                    <button>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex font-semibold pt-8">
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">Projects</a>
                    </Link >
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">Home</a>
                    </Link>
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">About</a>
                    </Link>
                </div>
            </div>
            <div >
                <div id="mobile-menu" className="hidden flex flex-col">
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">Projects</a>
                    </Link >
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">Home</a>
                    </Link>
                    <Link to={ROUTE.GENERAL.HOME}>
                    <a className="px-2" href = "/">About</a>
                    </Link>
                </div> 
            </div>
        </div>
    );

}
export default Banner
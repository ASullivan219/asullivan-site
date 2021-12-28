import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'


/** 
 * 
 * Utility Imports
*/
import { ROUTE } from './utils/RouteUtils'

/**
 * Page imports
 */
import LandingPage from './views/landingPage/LandingPage'
import Home from './views/landingPage/Home'
import SignInPage from './views/landingPage/SignInPage'




function App() {
  return (

    <Router>
      <Routes>
        <Route path={ROUTE.GENERAL.LANDING} element={<LandingPage/>} />
        <Route path={ROUTE.GENERAL.HOME} element={<Home/>} />
        <Route path={ROUTE.GENERAL.SIGNIN} element={<SignInPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react'
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




function App() {
  return (

    <Router>
      <Routes>
        <Route path={ROUTE.GENERAL.LANDING} element={<LandingPage/>} />
        <Route path={ROUTE.GENERAL.HOME} element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

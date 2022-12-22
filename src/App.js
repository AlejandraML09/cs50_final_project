import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import CharactersPage from "./pages/Characters/index";
import HomePage from "./pages/Home/index";
import NavBar from "./components/NavBar";
import HousesPage from "./pages/Houses";
import HouseDetail from "./pages/HouseDetail";
import './App.css'
import './assets/fonts/font.css'



const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/characters' element={<CharactersPage />} />
                <Route path='/houses' element={<HousesPage />} />
                <Route path='/houses/:houseId' element={<HouseDetail />} />
            </Routes>
        </Router>
    );
}


export default App;
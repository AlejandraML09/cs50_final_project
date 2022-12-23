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
import LoadingScreen from "./components/LoadingScreen";
import './App.css'
import './assets/fonts/font.css'



const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    return (
        <Router>
            <NavBar />
            <LoadingScreen show={isLoading} />
            <Routes>
                <Route path='/' element={<HomePage setIsLoading={setIsLoading}/>} />
                <Route path='/characters' element={<CharactersPage setIsLoading={setIsLoading}/>} />
                <Route path='/houses' element={<HousesPage setIsLoading={setIsLoading} />} />
                <Route path='/houses/:houseId' element={<HouseDetail setIsLoading={setIsLoading} />} />
            </Routes>
        </Router>
    );
}


export default App;
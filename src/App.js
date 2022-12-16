import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import HomePage from "./pages/Home/index";
import NavBar from "./components/NavBar";
import './App.css'
import './assets/fonts/font.css'



const App = () => {

    return (
        <Router>
            <Navbar />
                <HomePage />
                {/* <CharacterList/> */}
        </Router>
    );
}

function Navbar() {
    // visible on every page
    return <NavBar />
}


export default App;
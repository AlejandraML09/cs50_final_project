import React, { useEffect, useState } from "react";
import styles from './style.module.css'

import starkLogo from '../../assets/images/house_stark_logo.png'
import lannisterLogo from '../../assets/images/house_lannister_logo.png'
import targaryenLogo from '../../assets/images/house_targaryen_logo.png'
const NavBar = () => {


    const housesLogo = [starkLogo, lannisterLogo, targaryenLogo]

    const randomHouse = housesLogo[Math.floor(Math.random() * housesLogo.length)]

    const [showNavBarToggler, setShowNavBarToggler] = useState(false);

    return (
        <header className={styles.header}>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div className={styles.containerFluid} >
                    <div class="navbar-brand" className={styles.randomHouseLogoContainer}><img src={randomHouse} alt="" className={styles.randomHouseLogo} /></div>
                    <button onClick={() => setShowNavBarToggler(!showNavBarToggler)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={styles.navBarTextToggler} style={{display: showNavBarToggler ? "flex" : "none"}}  id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/characters">Characters</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/houses">Houses</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )



}


export default NavBar;


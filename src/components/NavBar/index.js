import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api'
import styles from './style.module.css'

import starkLogo from '../../assets/images/house_stark_logo.png'
import lannisterLogo from '../../assets/images/house_lannister_logo.png'
import targaryenLogo from '../../assets/images/house_targaryen_logo.png'
const NavBar = () => {


    const housesLogo = [starkLogo, lannisterLogo, targaryenLogo]

    const randomHouse = housesLogo[Math.floor(Math.random() * housesLogo.length)]


    return (
        <header className={styles.header}>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="navbar-brand" className={styles.randomHouseLogoContainer}><img src={randomHouse} alt="" className={styles.randomHouseLogo} /></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )



}


export default NavBar;


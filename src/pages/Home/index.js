import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api';
import styles from './style.module.css';
import gotLogoDesktop from '../../assets/images/game_of_thrones_logo.png'
import gotLogoMobile from '../../assets/images/got_small_logo.png'
import eddardStark from '../../assets/images/eddardstark.jpg'
import westerosMap from '../../assets/images/westerosmap.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/web'

const HomePage = () => {

    const OptionBox = ({ image, text, link }) => {
        return (
            <div className={`${styles.optionBox} ${styles.optionBoxImage}`} style={{ backgroundImage: `url(${image})` }}>
                <a href={link} className={`${styles.title} ${styles.link} ${styles.linkElara} ${styles.optionBoxTitle}`}>
                    <span >
                        {text}
                    </span>
                </a>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.homeBackground}>
                <div className={styles.gotLogoContainer}>
                    <img class="img-fluid" className={styles.gotLogoDesktop} src={gotLogoDesktop} alt="" />
                    <img class="img-fluid" className={styles.gotLogoMobile} src={gotLogoMobile} alt="" />
                </div>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.optionBackground}>
                    <h1 className={styles.title}>When you play the game of thrones, you win or you die. </h1>
                    <h1 className={styles.title}>Who will sit on the Iron Throne in the end? </h1>
                    <div className={styles.optionBoxesContainer}>
                        <OptionBox image={eddardStark} text='Characters' link='/characters' />
                        <OptionBox image={westerosMap} text='Westeros'  />
                    </div>
                </div>
            </div>

        </div>

    )



}


export default HomePage;



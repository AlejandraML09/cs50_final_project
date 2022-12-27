import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import gotLogoDesktop from '../../assets/images/game_of_thrones_logo.png'
import gotLogoMobile from '../../assets/images/got_small_logo.png'
import eddardStark from '../../assets/images/eddardstark.jpg'
import westerosMap from '../../assets/images/westerosmap.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/web'
import whiteArrow from '../../assets/images/white_arrow_down.png'
import backgroundVideo from '../../assets/video/ice_dragon.mp4'

const HomePage = ({ setIsLoading }) => {
    setTimeout(
        function () {
            setIsLoading(false)
        },
        1000);



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
                    <img className={styles.gotLogoDesktop} src={gotLogoDesktop} alt="" />
                    <img className={styles.gotLogoMobile} src={gotLogoMobile} alt="" />
                </div>
                <video className={styles.homeBackground} autoPlay loop muted>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>

                <section className={styles.whiteArrowContainer}>
                    <a className={styles.whiteArrowA} href="#section06"><span></span>
                    </a>
                </section>
            </div>
            <div className={styles.titleContainer}>
                <div id="section06" className={styles.optionBackground}>
                    <div className={styles.optionBoxesContainer}>
                        <OptionBox image={eddardStark} text='Characters' link='/characters' />
                        <OptionBox image={westerosMap} text='Houses' link='/houses' />
                    </div>
                </div>
            </div>

        </div>

    )



}


export default HomePage;



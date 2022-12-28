import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

import { getHouseById } from "../../services/apiClient";

import styles from './style.module.css';
import ReactPlayer from "react-player";




const HouseDetail = ({ setIsLoading }) => {
    let { houseId } = useParams();
    const [houseData, setHouseData] = useState({})

    useEffect(async () => {
        const fetchedHouse = await getHouseById(houseId)
        setIsLoading(false)
        setHouseData(fetchedHouse)

    }, []);

    return (
        <div className={styles.backgroundContainer} style={{ backgroundImage: `url(${houseData.background_image})` }}>
            <div className={styles.houseContainer}>
                <div className={styles.houseImagesContainer}>
                    <img className={styles.houseSigil} src={houseData.sigilLeft} alt="" /></div>
                <div className={styles.houseDescriptionContainer}>
                    <h1 className={styles.houseText}>{houseData.house}</h1>
                    <p className={styles.houseDescription}>
                        {houseData.descriptionShort}
                    </p>
                    <p className={styles.houseDescription}>
                        {houseData.description}
                    </p>
                </div>
                <div className={styles.houseImagesContainer2}>
                    <img className={styles.houseSigil} src={houseData.sigilRight} alt="" />
                </div>
            </div>
            <div className={styles.houseDescriptionContainerMobile}>
                <h1 className={styles.houseText}>{houseData.house}</h1>
                <p className={styles.houseDescription}>
                    {houseData.descriptionShort}
                </p>
                <p className={styles.houseDescription}>
                    {houseData.description}
                </p>
            </div>
            <section className={styles.whiteArrowContainer}>
                <a className={styles.whiteArrowA} href="#video"><span></span>
                </a>
            </section>
            <div className={styles.videoContainer}>
                <h1 id="video" className={styles.videoTitle}>Check out the best {houseData.house} moments</h1>
                <div className={styles.videoWrapper}>
                    <ReactPlayer className={styles.video} url={houseData.video} controls={true} width="80%"
                        height="80%" />
                </div>
            </div>

        </div>

    )
}

export default HouseDetail
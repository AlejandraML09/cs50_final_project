import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

import { getHouseById } from "../../services/apiClient";

import styles from './style.module.css';




const HouseDetail = () => {
    let { houseId } = useParams();
    const [houseData, setHouseData] = useState({})

    useEffect(async () => {
        const fetchedHouse = await getHouseById(houseId)
        setHouseData(fetchedHouse)

    }, []);

    return (
        <div className={styles.backgroundContainer} style={{ backgroundImage: `url(${houseData.background_image})` }}>
            <div className={styles.houseContainer}>
                <div className={styles.houseImagesContainer}>
                    <img className={styles.houseSigil} src={houseData.sigilLeft} alt="House Stark Sigil" /></div>
                <div className={styles.houseDescriptionContainer}>
                    <h1 className={styles.houseText}>{houseData.house}</h1>
                    <p className={styles.houseDescription}>
                        {houseData.descriptionShort}
                    </p>
                    <p className={styles.houseDescription}>
                        {houseData.description}
                    </p>
                </div>
                <div className={styles.houseImagesContainer}>
                    <img className={styles.houseSigil} src={houseData.sigilRight} alt="House Stark Sigil" /></div>
            </div>

        </div>

    )
}

export default HouseDetail
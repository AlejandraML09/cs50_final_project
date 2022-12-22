import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

import { getHouseById } from "../../services/api";

import styles from './style.module.css';




const HouseDetail = () => {
    let { houseId } = useParams();
    const [houseData, setHouseData] = useState({})

    useEffect(async () => {
        const fetchedHouse = await getHouseById(houseId)
        setHouseData(fetchedHouse)

    }, []);

    return (
        <div className={styles.houseContainer} style={{ backgroundImage: `url(${houseData.background_image})` }}>
        <h1 className={styles.houseText}>{houseData.house}</h1>
        </div>

    )
}

export default HouseDetail
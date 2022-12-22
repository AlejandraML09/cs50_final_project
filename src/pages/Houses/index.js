import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import westerosMap from '../../assets/images/westerosmap.jpg'
import { listHousesGOT } from "../../services/apiClient";
import gotIntro from '../../assets/video/gotIntro.mp4';

const HousesPage = () => {
    useEffect(async () => {
        const importantHouses = await listHousesGOT()
        setSelectedHouse(importantHouses)
    }, []);

    const [selectedHouse, setSelectedHouse] = useState([])

    return (
        <div className={styles.container} >
            <video className={styles.backgroundVideo} autoPlay loop muted>
                <source src={gotIntro} type='video/mp4' />
            </video>
            <div className={styles.cardsContainer}>
                {selectedHouse.map((houses) => {
                    return (
                        <div className={styles.card} >
                            <div className={styles.box}
                                style={{ backgroundImage: `url(${houses.card_image})` }}
                            >
                                <div className={styles.content} >
                                    {/* <h2>Stark</h2> */}
                                    <h3>{houses.house}</h3>
                                    <p>{houses.descriptionShort}</p>
                                    <a href={`/houses/${houses._id}`}>Click here to know more.</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    )



}


export default HousesPage;

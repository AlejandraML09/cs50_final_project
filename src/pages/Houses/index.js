import React, { useEffect, useState } from "react";
import styles from './style.module.css';
import starkLogo from '../../assets/images/house_stark_logo.png'
import lannisterLogo from '../../assets/images/house_lannister_logo.png'
import targaryenLogo from '../../assets/images/house_targaryen_logo.png'
import westerosMap from '../../assets/images/westerosmap.jpg'
import gotIntro from '../../assets/video/gotIntro.mp4'
import { listHousesGOT } from "../../services/api";
import lannisterLogo2 from '../../assets/images/housebaratheonmobile.jpg'
import starkLogo2 from '../../assets/images/starklogo1x.jpg'

const HousesPage = () => {
    useEffect(async () => {
        const importantHouses = await listHousesGOT()
        setSelectedHouse(importantHouses)
    }, []);

    const [selectedHouse, setSelectedHouse] = useState([])

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${westerosMap})` }} >
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

    )



}


export default HousesPage;

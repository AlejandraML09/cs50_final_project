import React, { useEffect, useState } from "react";

import styles from './style.module.css';
import CharacterList from "../../components/CharacterList";
import { listCharactersGOT } from "../../services/apiClient";
import lannisterBg from '../../assets/images/lannisterbg.png';
import starkBg from '../../assets/images/starkbg.png';
import targaryenBg from '../../assets/images/targaryenbg.png';
import baratheonBg from '../../assets/images/baratheonbg.png'

const Characters = ({ setIsLoading }) => {

    useEffect(async () => {
        const importantCharacters = await listCharactersGOT()
        setImportantCharacterList(importantCharacters.sort((elem1, elem2) => elem1.order - elem2.order))
        setIsLoading(false)
        setSelectedCharacter(importantCharacters[0])
    }, []);

    const [importantCharacterList, setImportantCharacterList] = useState([])

    const housesBackgroundSelected = () => {
        switch (selectedCharacter.house) {
            case "House Targaryen": return targaryenBg
            case "House Stark": return starkBg
            case "House Baratheon": return baratheonBg
            case "House Lannister": return lannisterBg
            default: return starkBg
        }
    }


    const [selectedCharacter, setSelectedCharacter] = useState({})



    return (
        <div className={styles.charactersPageContainer}
            style={{ backgroundImage: `url('${housesBackgroundSelected()}')` }}
        >
            <div className={styles.characterHorizontalScrollContainer}>
                <CharacterList setSelectedCharacter={setSelectedCharacter} importantCharacterList={importantCharacterList} />
            </div>
            <div className={styles.charactersInfoContainer}>
                <div className={styles.characterTextContainer}>
                    <h1 className={styles.characterName}>{selectedCharacter.name}</h1>
                    <h2 className={styles.characterTitle}>{selectedCharacter.titles}</h2>
                    <p className={styles.characterDescription}>{selectedCharacter.description}</p>
                    <p className={styles.characterDescription}>{selectedCharacter.descriptionShort}</p>
                </div>
                <img className={styles.characterImage} src={selectedCharacter.image} alt={selectedCharacter.name} />
            </div>


        </div>

    )



}


export default Characters;


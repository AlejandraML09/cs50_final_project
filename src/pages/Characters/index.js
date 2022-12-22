import React, { useEffect, useState } from "react";

import styles from './style.module.css';
import CharacterList from "../../components/CharacterList";
import { listCharactersGOT } from "../../services/apiClient";


const Characters = () => {

    useEffect(async () => {
        const importantCharacters = await listCharactersGOT()
        setImportantCharacterList(importantCharacters)
        setSelectedCharacter(importantCharacters[0])
    }, []);

    const [importantCharacterList, setImportantCharacterList] = useState([])


    const [selectedCharacter, setSelectedCharacter] = useState({})



    return (
        <div className={styles.charactersPageContainer}>
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
                <div className={styles.characterImageContainer}>
                    <img className={styles.characterImage} src={selectedCharacter.image} alt={selectedCharacter.name} />
                </div>
            </div>


        </div>

    )



}


export default Characters;


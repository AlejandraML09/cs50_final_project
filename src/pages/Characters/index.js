import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api';
import styles from './style.module.css';
import daenerysTargaryen from '../../assets/images/daenerys.png'
import CharacterList from "../../components/CharacterList";
import getCharactersFromMongo from "../../services/miapi";


const Characters = () => {
    useEffect(async () => {
        let importantCharactersTemp = await listCharactersGOT()
        console.log('aaaa', importantCharactersTemp)
        setImportantCharacterList(importantCharactersTemp)
        let daenerys = importantCharactersTemp.find((character) => character.name == 'Daenerys Targaryen')
        console.log('daenerys bro', daenerys)
        setSelectedCharacter(daenerys)
        const dataFromMongo = await getCharactersFromMongo()
        console.log('dataFromMongo', dataFromMongo)
    }, []);

    const [importantCharacterList, setImportantCharacterList] = useState([])


    const [selectedCharacter, setSelectedCharacter] = useState({})



    return (
        <div className={styles.charactersPageContainer}>
            <div className={styles.charactersListContainer}>
                <CharacterList setSelectedCharacter={setSelectedCharacter} />
            </div>
            <div className={styles.charactersInfoContainer}>
                <div className={styles.characterDescriptionContainer}>
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


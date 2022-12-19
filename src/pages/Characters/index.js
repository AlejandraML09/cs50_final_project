import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api';
import styles from './style.module.css';
import daenerysTargaryen from '../../assets/images/daenerys.png'
import CharacterList from "../../components/CharacterList";
import fetchData from "../../services/miapi";


const Characters = () => {
    useEffect(async () => {
        let importantCharactersTemp = await listCharactersGOT()
        console.log('aaaa', importantCharactersTemp)
        setImportantCharacterList(importantCharactersTemp)
        let daenerys = importantCharactersTemp.find((character) => character.name == 'Daenerys Targaryen' )
        console.log('daenerys bro', daenerys)
        setSelectedCharacter(daenerys)
        const dataFromMongo = await fetchData()
        console.log('dataFromMongo', dataFromMongo)
    }, []);

    const [importantCharacterList, setImportantCharacterList] = useState([])


    const [selectedCharacter, setSelectedCharacter] = useState({ name: 'Daenerys Targaryen', image: daenerysTargaryen })

    return (
        <div className={styles.charactersPageContainer}>
            <div className={styles.charactersListContainer}>
                <CharacterList setSelectedCharacter={setSelectedCharacter} />
            </div>
            <div className={styles.charactersInfoContainer}>
                <h1 className={styles.characterName}>{selectedCharacter.name}</h1>
                <img className={styles.characterImage} src={selectedCharacter.image} alt="Daenerys Targaryen" />
            </div>
        </div>

    )



}


export default Characters;


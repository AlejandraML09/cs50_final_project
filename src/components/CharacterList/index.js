import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api'
import styles from './style.module.css';
const CharacterList = ({ setSelectedCharacter }) => {

    useEffect(async () => {
        setImportantCharacterList(await listCharactersGOT())
    }, []);

    const [importantCharacterList, setImportantCharacterList] = useState([])

    function selectCharacter(character) {
        setSelectedCharacter(character)
        console.log('hola hiciste click en', character.name)
    }

    return (
        <div className={styles.characterListVerticalScroll}>
            {importantCharacterList.map((character) => {
                console.log('Imagen de ', character.name)
                console.log(character.image)
                return (
                    <div className={styles.buttonContainer}>

                        <button onClick={() => selectCharacter(character)} className={styles.characterButton}>{(character.name)}
                            <img src={character.image} className={styles.houseImage} />
                        </button>


                    </div>
                )
            })}
        </div>
    )
}


export default CharacterList;
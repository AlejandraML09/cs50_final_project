import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api'
import styles from './style.module.css';
const CharacterList = ({setSelectedCharacter}) => {

    useEffect(async () => {
        setImportantCharacterList(await listCharactersGOT())
    }, []);

        const [importantCharacterList, setImportantCharacterList] = useState([])

        function selectCharacter(character) {
            setSelectedCharacter(character)
            console.log('hola hiciste click en', character.name)
        }

    return (
        <div>
            {importantCharacterList.map((character) => {
                return (
                    <div>
                        <button onClick={ () => selectCharacter(character)} className={styles.characterList}>{(character.name)}</button>
                    </div>
                )
            })}
        </div>
    )
}


export default CharacterList;
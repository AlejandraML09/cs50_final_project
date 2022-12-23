import React, { useEffect, useState } from "react";
import styles from './style.module.css';
const CharacterList = ({ setSelectedCharacter, importantCharacterList }) => {

    function selectCharacter(character) {
        setSelectedCharacter(character)
        console.log('hola hiciste click en', character.name)
    }

    return (
        <div className={styles.characterListHorizontalScroll}>
            {importantCharacterList.map((character, index) => {
                console.log('Imagen de ', character.name)
                console.log(character.image)
                return (
                    <div className={`${styles.buttonBackground} ${styles.buttonContainer}`} style={{ backgroundImage: `url('${character.image}')` }} >
                        <button onClick={() => selectCharacter(character)}
                            className={styles.characterButton}>
                            <h1 className={styles.characterName}>{(character.name)}</h1>
                        </button>
                    </div>

                )
            })}
        </div>
    )
}


export default CharacterList;
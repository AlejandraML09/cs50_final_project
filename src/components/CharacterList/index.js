import React, { useEffect, useState } from "react";
import styles from './style.module.css';
const CharacterList = ({ setSelectedCharacter, importantCharacterList }) => {

    function selectCharacter(character) {
        setSelectedCharacter(character)
        console.log('hola hiciste click en', character.name)
    }

    const scrollLastElementIntoView = () => {
        let lastElement = document.getElementById('lastCharacter')
        lastElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }


    return (
        <div className={styles.characterListHorizontalScroll}>
                   {importantCharacterList.map((character, index) => {
                console.log('Imagen de ', character.name)
                console.log(character.image)
                return (
                    <div className={styles.buttonContainer} >
                        <button onClick={() => selectCharacter(character)} style={{ backgroundImage: `url('${character.image}')` }}
                            className={styles.characterButton}>{(character.name)}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}


export default CharacterList;
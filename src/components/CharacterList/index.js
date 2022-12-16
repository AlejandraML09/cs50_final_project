import React, { useEffect, useState } from "react";
import listCharactersGOT from '../../services/api'

const CharacterList = () => {

    useEffect(async () => {
        setImportantCharacterList(await listCharactersGOT())
    }, []);

        const [importantCharacterList, setImportantCharacterList] = useState([])

    return (
        <div>
            {importantCharacterList.map((character) => {
                return (
                    <div>
                        {/* <div>{JSON.stringify(character)}</div> */}
                        <div>name : {(character.name)}</div>
                    </div>
                )
            })}
        </div>
    )
}


export default CharacterList;
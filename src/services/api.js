import daenerysTargaryen from '../assets/images/daenerys.png'

const API_URL = 'https://www.anapioficeandfire.com/api'



const importantCharactersIds = [
    { name: 'Daenerys Targaryen', id: 271, image: daenerysTargaryen},
    { name: 'Viserys Targaryen', id: 1079 },
    { name: 'Jon Snow', id: 583 },
    { name: 'Arya Stark', id: 148 },
    { name: 'Robb Stark', id: 1880 },
    { name: 'Catelyn Stark', id: 232 },
    { name: 'Eddard Stark', id: 339 },
    { name: 'Catelyn Stark', id: 232 },
    { name: 'Sansa Stark', id: 957 },
    { name: 'Rickon Stark', id: 891 },
    { name: 'Tyrion Lannister', id: 1052 },
    { name: 'Cersei Lannister', id: 238 },
    { name: 'Jaime Lannister', id: 529 },
    { name: 'Tywin Lannister', id: 27 },
    { name: 'Joffrey Baratheon', id: 565 },

]

const getImportantCharacters = importantCharacter => fetch(`${API_URL}/characters/${importantCharacter.id}`)
const responseToJson = response => response.json()

const listCharactersGOT = async () => {
    let responsesFromApi = await Promise.all(importantCharactersIds.map(getImportantCharacters))
    let dataAsJson = await Promise.all(responsesFromApi.map(responseToJson))
    return dataAsJson
}



export default listCharactersGOT

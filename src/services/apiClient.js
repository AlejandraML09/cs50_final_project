const API_URL = 'http://localhost:5000'

const getImportantCharacters = () => fetch(`${API_URL}/characters`)
const getImportantHouses = () => fetch(`${API_URL}/houses`)
const getHouse = (id) => fetch(`${API_URL}/houses/${id}`)

export const listCharactersGOT = async () => {
    let response = await getImportantCharacters()
    let dataAsJson = await response.json()
    return dataAsJson
}

export const listHousesGOT = async () => {
    let response = await getImportantHouses()
    let dataAsJson = await response.json()
    return dataAsJson
}
export const getHouseById = async (id) => {
    let response = await getHouse(id)
    let dataAsJson = await response.json()
    return dataAsJson
}


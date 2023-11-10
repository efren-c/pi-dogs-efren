const axios = require("axios")
const { API_KEY } = process.env

const infoAPI = async () => {
    const response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        .then((response) => response.data)

    if (!Array.isArray(response)) {
        return []
    }

    const allDogs = await Promise.all(response.map((element) => {
        return {
            id: element.id,
            name: element.name,
            height: element.height,
            weight: element.weight,
            lifeSpan: element.lifeSpan,
            created: false
        }
    }))
    return allDogs
}

module.exports = { infoAPI }
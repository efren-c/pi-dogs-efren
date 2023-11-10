const axios = require("axios")
const { API_KEY } = process.env

const getAllTemperaments = async () => {
    const temperamentsAPI = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`))
        .then((response) => response.data)

    const temperaments = new Set()

    response.map((dog) => {
        dog.temperaments.map((temperament) => {
            temperaments.add(temperament.temperaments.name)
        })
    })

    return temperamentsAPI
}

module.exports = getAllTemperaments
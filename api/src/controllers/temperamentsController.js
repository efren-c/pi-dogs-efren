const axios = require("axios")
const { Temperament } = require("../db")
const { API_KEY } = process.env

const getAllTemperaments = async () => {
    let aDbTemperaments = await Temperament.findAll()

    if (aDbTemperaments.length === 0) {
        const temperamentsAPI = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data

        const allTemperaments = []
        temperamentsAPI.forEach((dog) => {
            const temperament = dog.temperament

            if (temperament) {
                const splitTemperaments = temperament.split(", ")
                allTemperaments.push(...splitTemperaments)
            }
        })

        aDbTemperaments = [...new Set(allTemperaments)]

        aDbTemperaments.forEach((name) => {
            postTemperament(name)
        })
    }
    return aDbTemperaments
}

const postTemperament = async (name) => {
    const newTemperament = await Temperament.create({ name })

    return newTemperament
}

module.exports = getAllTemperaments
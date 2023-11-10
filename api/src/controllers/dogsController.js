const axios = require("axios")
const { Dog, Temperament } = require("../db")
const { infoAPI } = require("../functions/function.index")
const { API_KEY } = process.env


const createDogsDB = async (id, name, height, weight, lifeSpan, temperament, image) => {
    return await Dog.create({ id, name, height, weight, lifeSpan, temperament, image })
}

const getAllDogs = async () => {
    const dogsDB = await Dog.findAll() //createDogsDB()
    const dogAPI = await infoAPI()

    return [...dogsDB, ...dogAPI]
}

const getDetailDog = async (id, source) => {
    const dog = source === "api"
        ? (await axios(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${API_KEY}`)).data
        : await Dog.findByPk(id, {
            include: {
                model: Temperament,
                attributes: ["id", "name"],
            },
        })
    return dog
}

const getNameDogs = async (name) => {
    const dogFilterAPI = ((await infoAPI()).filter((dog) => dog.name === name))
    const dogFilterDB = await Dog.findAll({ where: { name: name } })

    return [...dogFilterAPI, dogFilterDB]
}

const postDog = async (name, height, weight, lifeSpan, image, temperaments) => {
    const newDog = await Dog.create({ name, height, weight, lifeSpan, image, temperaments })

    //if (!image) newDog.image = "https://i.kym-cdn.com/entries/icons/original/000/008/342/ihave.jpg"
    //FALTA AGREGAR Temperament
    return newDog
}

module.exports = { getAllDogs, getDetailDog, getNameDogs, postDog, createDogsDB }
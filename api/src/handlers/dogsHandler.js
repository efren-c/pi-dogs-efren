const { getAllDogs, getDetailDog, getNameDogs, postDog } = require("../controllers/dogsController")


const getDogsHandler = async (req, res) => {
    try {
        const allDogs = await getAllDogs()
        return res.status(200).json(allDogs)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getDetailHandler = async (req, res) => {
    const { id } = req.params

    const source = isNaN(id) ? "db" : "api"

    try {
        const detailDog = await getDetailDog(id, source)
        return res.status(200).json(detailDog)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const getNameHandler = async (req, res) => {
    const { name } = req.query
    const nameDog = await getNameDogs(name)
    try {
        if (nameDog.length === 0) return res.status(202).json(getAllDogs())
        return res.status(200).json(nameDog)
    } catch (error) {
        return res.status(500).send(error)
    }
}

const postDogHandler = async (req, res) => {
    const { name, height, weight, lifeSpan, image, temperaments } = req.body
    const createDog = postDog(name, height, weight, lifeSpan, image, temperaments)
    try {
        return res.status(200).json(createDog)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = { getDogsHandler, getDetailHandler, getNameHandler, postDogHandler }
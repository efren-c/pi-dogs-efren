const getAllTemperaments = require("../controllers/temperamentsController")

const getTemperamentsHandler = async (req, res) => {
    const { temperaments } = req.body
    const allTemperaments = await getAllTemperaments(temperaments)
    try {
        return res.status(200).json(allTemperaments)
    } catch (error) {
        return res.status(404).send(error)
    }
}

module.exports = getTemperamentsHandler
const { Router } = require("express")
const { getDogsHandler, getDetailHandler, getNameHandler, postDogHandler } = require("../handlers/dogsHandler")


const dogsRouter = Router()

dogsRouter.get("/", getDogsHandler)
dogsRouter.get("/:id", getDetailHandler)
dogsRouter.get("/", getNameHandler)
dogsRouter.post("/", postDogHandler)

module.exports = dogsRouter
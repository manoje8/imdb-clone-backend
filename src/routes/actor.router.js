import express from "express"
import Actor from "../controller/actor.controller.js"

const actorRouter = express()

actorRouter.get("/getActorById/:id", Actor.getActorById)

export default actorRouter
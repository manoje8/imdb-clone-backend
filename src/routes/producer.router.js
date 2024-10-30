import express from "express"
import Producer from "../controller/producer.controller.js"

const producerRouter = express()

producerRouter.get("/getProducerById/:id", Producer.getProducerById)

export default producerRouter
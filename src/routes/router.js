import express from "express";
import userRouter from "./user.router.js";
import movieRouter from "./movies.router.js";
import actorRouter from "./actor.router.js";
import producerRouter from "./producer.router.js";

const router = express()

router.use("/movie", movieRouter)
router.use("/actor", actorRouter)
router.use("/producer", producerRouter)
router.use("/auth", userRouter)

export default router
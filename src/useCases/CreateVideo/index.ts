import { CreateVideoUseCase } from "./CreateVideoUseCase"
import { MongoVideoRepostory } from "../../repositories/implementations/MongoVideoRepository"
import { CreateVideosController } from "./CreateVideoController"

const mongoVideoRepostory = new MongoVideoRepostory()

const createVideoUseCase = new CreateVideoUseCase(mongoVideoRepostory)

const createVideosController = new CreateVideosController(createVideoUseCase)

export { createVideoUseCase, createVideosController }
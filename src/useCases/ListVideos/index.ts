import { MongoVideoRepostory } from "../../repositories/implementations/MongoVideoRepository"
import { ListVideoController } from "./ListVideosController"
import { ListVideosUseCase } from "./ListVideoUseCase"

const mongoVideoRepostory = new MongoVideoRepostory()

const listVideosUseCase = new ListVideosUseCase(mongoVideoRepostory)

const listVideosController = new ListVideoController(listVideosUseCase)

export { listVideosUseCase, listVideosController }
import { IVideosRepostory } from "../../repositories/IVideosRepository";
import { ICreateVideoRequestDTO } from "./CreateVideoDTO";
import { Video } from "../../entities/Video";

export class CreateVideoUseCase {
    private videosRepository: IVideosRepostory

    constructor(
        videosRepository: IVideosRepostory
    ) {
        this.videosRepository = videosRepository
    }

    async execute(data: ICreateVideoRequestDTO) {
        const video = new Video(data)
        
        await this.videosRepository.save(video)
    }
}
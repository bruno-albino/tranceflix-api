import { IVideosRepostory } from "../../repositories/IVideosRepository";

export class ListVideosUseCase {
    private videosRepository: IVideosRepostory

    constructor(
        videosRepository: IVideosRepostory
    ) {
        this.videosRepository = videosRepository
    }

    async execute() {
        const videos = await this.videosRepository.index()
        return videos
    }
}
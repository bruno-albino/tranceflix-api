import { ListVideosUseCase } from "./ListVideoUseCase";
import { Request, Response } from "express";

export class ListVideoController {
    constructor(
        private listVideoUseCase: ListVideosUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        try {
            const videos = await this.listVideoUseCase.execute()
            return response.status(200).json(videos)
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}
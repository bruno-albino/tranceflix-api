import { CreateVideoUseCase } from "./CreateVideoUseCase";
import { Request, Response, response } from "express";

export class CreateVideosController {
    constructor(
        private createVideoUseCase: CreateVideoUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { path, name } = request.body

        try {
            await this.createVideoUseCase.execute({
                name,
                path
            })

            return response.status(201).send()
        } catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}
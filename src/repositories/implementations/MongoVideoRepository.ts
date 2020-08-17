import { IVideosRepostory } from "../IVideosRepository";
import { Video } from "../../entities/Video";
import { Videos } from '../../models/Videos'
import { Document } from "mongoose";

export class MongoVideoRepostory implements IVideosRepostory {
    async save(video: Video): Promise<void> {
        await Videos.create({
            path: video.path,
            name: video.name
        })
    }

    async index(): Promise<Document[]> {
        const videos = await Videos.find()

        return videos
    }
}
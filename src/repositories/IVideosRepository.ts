import { Video } from "../entities/Video";
import { Document } from "mongoose";

export interface IVideosRepostory {
    save(video: Video): Promise<void>
    index(): Promise<Document[]>
}
import mongoose from "../database";

const videoSchema = new mongoose.Schema({
    path: String,
    name: String
})

const Videos = mongoose.model('Videos', videoSchema)

export { Videos }
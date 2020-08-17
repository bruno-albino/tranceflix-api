import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect('mongodb+srv://brunoalbino:' + process.env.DATABASE_PASSWORD + '@cluster0.zxrmn.mongodb.net/Tranceflix?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export default mongoose
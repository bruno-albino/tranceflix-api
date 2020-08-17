import { Router } from 'express'
import { createVideosController } from './useCases/CreateVideo'
import { listVideosController } from './useCases/ListVideos'

const routes = Router()

routes.post('/videos', (req, res) => {
    return createVideosController.handle(req, res)
})

routes.get('/videos', (req, res) => {
    return listVideosController.handle(req, res)
})


routes.get('/*', (_, res) => {
    res.status(404).json({
        message: 'route not defined'
    })
})

export { routes }
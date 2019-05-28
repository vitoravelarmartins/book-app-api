import { Router } from 'express'
import SessionController from '../controllers/SessionController'
import AuthMiddleware from '../middlewares/AuthMiddleware'

const router = Router()

router.post('/sessions', SessionController.login)

router.use(AuthMiddleware)

export default router
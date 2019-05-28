import { Router } from 'express'
import UserController from '../controllers/UserController'

const router = Router()

router.post('/users', UserController.addUser)
router.get('/users/:email', UserController.getUser)

export default router
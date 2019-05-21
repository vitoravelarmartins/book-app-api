import { Router } from 'express'

import AuthorController from '../controllers/BookController';

const router = Router()

router.post('/Books', AuthorController.addNew)
router.get('/Books', AuthorController.getAll)
router.get('/Books/:id', AuthorController.getOne)
router.put('/Books/:id', AuthorController.update)
router.delete('/Books/:id', AuthorController.delete)


export default router
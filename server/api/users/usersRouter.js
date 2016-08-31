import express from 'express'

import { create } from './usersController'

const router = express.Router()

router.post('/', create)

export default router

import express from 'express'

import { login }      from './controller'
import { verifyUser } from './auth'

const router = express.Router()

router.post('/', verifyUser() , login)

export default router

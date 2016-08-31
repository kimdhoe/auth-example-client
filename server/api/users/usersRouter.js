import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  res.json({ user: true })
})

export default router

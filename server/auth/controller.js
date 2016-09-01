import jwt from 'jsonwebtoken'

import { signToken } from './auth'

export const login = (req, res, next) => {
  const { identifier, password } = req.body

  const token = signToken({ id:       req.user.id
                          , username: req.user.username
                          }
                         )
  res.json({ token
           , username: req.user.username
           }
          )
}

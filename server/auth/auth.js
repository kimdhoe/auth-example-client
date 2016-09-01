import find from 'lodash/find'
import jwt  from 'jsonwebtoken'

import { findUser
       , authenticate
       }      from '../api/users/model'
import config from '../config'

export const verifyUser = () => (req, res, next) => {
  const { identifier, password } = req.body

  const user = findUser({ username: identifier })
            || findUser({ email:    identifier })

  if (!user) {
    res.status(401).json({ errors: { form: '정보가 올바르지 않습니다.' } })
  }
  else {
    if (authenticate(user, password)) {
      req.user = user
      next()
    }
    else {
      res.status(401).json({ errors: { form: '정보가 올바르지 않습니다.' } })
    }
  }
}

export const signToken = ({ id, username }) =>
  jwt.sign( { id, username }
          , config.secrets.jwt
          , { expiresIn: config.expireTime }
          )

import bcrypt  from 'bcrypt'
import find    from 'lodash/find'
import isEmpty from 'lodash/isEmpty'

import { findUser
       , saveUser
       } from './model'
import validate     from '../../../shared/validations/signup'

const validateUser = user => {
  const { errors } = validate(user)

  if (findUser({ username: user.username }))
    errors.username = '이미 사용 중인 이름입니다.'

  if (findUser({ email: user.email }))
    errors.email = '이미 사용 중인 이메일 주소입니다.'

  return { errors, isValid: isEmpty(errors) }
}

export const create = (req, res, next) => {
  const { errors, isValid } = validateUser(req.body)

  if (isValid) {
    const { username, email, password } = req.body
    const password_digest = bcrypt.hashSync(password, 10)

    saveUser({ username, email, password_digest })

    res.json({ success: true })
  }
  else
    res.status(400).json(errors)
}

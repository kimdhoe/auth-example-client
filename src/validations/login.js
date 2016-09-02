import validator from 'validator'
import isEmpty   from 'lodash/isEmpty'

const validate = ({ identifier, password }) => {
  const errors = {}

  if (validator.isNull(identifier))
    errors.identifier = '이름 혹은 이메일 주소가 필요합니다.'

  if (validator.isNull(password))
    errors.password = '암호가 필요합니다.'

  return { errors
         , isValid: isEmpty(errors)
         }
}

export default validate

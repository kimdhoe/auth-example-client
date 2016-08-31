import validate from '../../../shared/validations/signup'

export const create = (req, res, next) => {
  const { errors, isValid } = validate(req.body)

  if (isValid)
    res.json({ ok: true})
  else
    res.status(400).json(errors)
}

import find    from 'lodash/find'
import shortid from 'shortid'
import bcrypt  from 'bcrypt'

const users = [ { id:             shortid.generate()
                , username:       'guest'
                , email:          'guest@example.com'
                , password_digest: bcrypt.hashSync('guest', 10)
                }
              ]

// Saves a given user to memory.
export const saveUser = user => {
  users.push({ ...user
             , id: shortid.generate()
             }
            )
}

// Finds a user that matches the given information.
// e.g. findUser({ username: 'guest' })
export const findUser = info =>
  find(users, info)

// Is a given plain string password correct?
export const authenticate = (user, plainPassword) =>
  bcrypt.compareSync(plainPassword, user.password_digest)

export default users

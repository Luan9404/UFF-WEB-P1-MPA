import { database } from '../db.js' 

class UserRepository {
  async getUserByEmail(email) {
    const db = await database.connect()
    const userDb = db.collection('users')
    const result = await userDb.findOne({ email })
    console.log(result)
    return result
  }

  async registerUser(userData) {
    const db = await database.connect()
    const userDb = db.collection('users')
    const result = userDb.insertOne(userData)

    return result
  }
}

export const userRepository = new UserRepository()
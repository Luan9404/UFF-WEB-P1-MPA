import { database } from '../db.js' 

class UserRepository {
  async getUserByEmail(email) {
    const db = await database.connect()
    const userDb = db.collection('users')
    const result = await userDb.findOne({ email })
    return result
  }

  async registerUser(userData) {
    const db = await database.connect()
    const userDb = db.collection('users')
    await userDb.insertOne(userData)
  }

  async getUserAdmin(email) {
    const db = await database.connect()
    const userDb = db.collection('users')
    const result = await userDb.findOne({ email, isAdmin: true })
    return result
  }

  async getAllUsers() {
    const db = await database.connect()
    const userDb = db.collection('users')
    const result = await userDb.find({}).toArray()
    return result
  }

  async updateUser(newUserData) {
    const db = await database.connect()
    const userDb = db.collection('users')
    let query = { email: newUserData.email }
    let newValues = {...newUserData}
    await userDb.updateOne(query, newValues)
  }
}

export const userRepository = new UserRepository()
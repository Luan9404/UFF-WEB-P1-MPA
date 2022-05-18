import { database } from "../db.js";

class AdminRepository{
  async addCar(carData){
    let db = await database.connect()
    let carDb = db.collection('carros')

    await carDb.insertOne(carData)
  }
}

export const adminRepository = new AdminRepository()
import { database } from "../db.js";

class CarRepository{
  async getAllCars(){
    let db = await database.connect()
    let carDb = db.collection('carros')
    let carsCollection = await carDb.find({}).toArray()
    return carsCollection
  }
}

export const carsRepository = new CarRepository()
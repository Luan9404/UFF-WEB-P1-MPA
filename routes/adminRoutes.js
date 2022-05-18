import { adminController } from "../controllers/adminController.js"
import express from 'express'
const routes = express.Router()

routes.get('/sing-in', adminController.signIn)
routes.get('/loja', adminController.loadLoja)
routes.post('/loja/car-add', adminController.addCar)
routes.post('/sing-up', adminController.singUp)

export const adminRoutes = routes
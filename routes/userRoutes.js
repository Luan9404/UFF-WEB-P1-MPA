import { userController } from "../controllers/userController.js"
import express from 'express'
const routes = express.Router()

routes.post('/register', userController.registerUser)
routes.post('/login', userController.login)
routes.get('/conta', userController.getConta)

export const userRoutes = routes
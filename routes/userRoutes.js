import { userController } from "../controllers/userController.js"
import express from 'express'
const routes = express.Router()

routes.get('/sign-up', userController.signUp)
routes.get('/sign-in', userController.signIn)
routes.get('/conta', userController.getConta)
routes.post('/sing-up', userController.registerUser)
routes.post('/sing-in', userController.login)

export const userRoutes = routes
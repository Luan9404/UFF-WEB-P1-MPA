import { adminController } from "../controllers/adminController.js"
import express from 'express'
const routes = express.Router()

routes.get('/admin', adminController.signIn)

export const adminRoutes = routes
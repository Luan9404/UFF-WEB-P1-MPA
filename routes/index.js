import { home } from "../controllers/homeController.js"
import { adminController } from "../controllers/adminController.js"
import { userRoutes } from "./userRoutes.js"
import { adminRoutes } from "./adminRoutes.js"

export const routes = (app) => {
  app.get('/', home.List)

  app.use('/user', userRoutes)

  app.get('/admin', adminRoutes)
}
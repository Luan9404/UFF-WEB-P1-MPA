import { home } from "../controllers/homeController.js"
import { userRoutes } from "./userRoutes.js"

export const routes = (app) => {
  app.get('/', home.List)

  app.use('/user', userRoutes)
}
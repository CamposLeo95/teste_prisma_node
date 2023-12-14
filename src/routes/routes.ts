import { Router } from "express"
import { UserController } from "../controllers/userControllers"

const routes = Router()

const userController = new UserController()

// USERS
routes.get('/users', userController.index.bind(userController))
routes.post('/users', userController.create.bind(userController))
routes.put('/users/:id', userController.update.bind(userController))
routes.delete('/users/:id', userController.delete.bind(userController))

export { routes }
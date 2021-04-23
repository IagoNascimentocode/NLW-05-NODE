import { Router } from "express";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UserController } from "./controller/UserController"

const routes = Router()

const settingsController = new SettingsController();
const userController = new UserController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create)
routes.get("/settings/:user_name", settingsController.findByUserName)
routes.put("/settings/:user_name", settingsController.update)

routes.post("/users", userController.create)

routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export { routes }


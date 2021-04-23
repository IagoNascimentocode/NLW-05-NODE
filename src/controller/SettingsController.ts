import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
 async create(request: Request, response: Response) {
  const { chat, user_name } = request.body;

  try {
   const settingsService = new SettingsService()

   const settings = await settingsService.create({ chat, user_name })

   return response.json(settings)
  } catch (err) {
   return response.status(400).json({
    message: err.message
   })
  }
 }

 async findByUserName(request: Request, response: Response) {
  const { user_name } = request.params;

  const settingsService = new SettingsService();

  const settings = await settingsService.findByUserName(user_name);

  return response.json(settings)
 }

 async update(request: Request, response: Response) {
  const { user_name } = request.params;
  const { chat } = request.body;

  const settingsService = new SettingsService();

  const settings = await settingsService.update(user_name, chat);

  return response.json(settings)
 }
}

export { SettingsController }
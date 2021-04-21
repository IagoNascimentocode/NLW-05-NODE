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
}

export { SettingsController }
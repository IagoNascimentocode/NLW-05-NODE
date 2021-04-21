import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository"


interface ISettingsCreate {
 chat: boolean;
 user_name: string;
}
class SettingsService {

 private settingsRepository: Repository<Setting>;

 constructor() {
  this.settingsRepository = getCustomRepository(SettingsRepository);
 }

 async create({ chat, user_name }: ISettingsCreate) {

  const userAlreadyExists = await this.settingsRepository.findOne({
   user_name
  })

  if (userAlreadyExists) {
   throw new Error("User Already exists!")
  }

  const settings = this.settingsRepository.create({ chat, user_name });

  await this.settingsRepository.save(settings);

  return settings;
 }
}
export { SettingsService }
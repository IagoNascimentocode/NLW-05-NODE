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

 async findByUserName(user_name: string) {
  const settings = await this.settingsRepository.findOne({
   user_name
  })
  return settings.chat
 }

 async update(user_name: string, chat: boolean) {
  const settings = await this.settingsRepository.createQueryBuilder()
   .update(Setting)
   .set({ chat })
   .where("user_name = :user_name", { user_name })
   .execute()

 }
}
export { SettingsService }
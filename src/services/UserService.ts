import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";




class UserService {

 private usersRepository: Repository<User>;

 constructor() {
  this.usersRepository = getCustomRepository(UsersRepository);
 }

 async findByEmail(email: string) {
  const user = await this.usersRepository.findOne({ email })

  return user
 }

 async create(email: string) {
  // verificar se usuarios existe
  const userExists = await this.usersRepository.findOne({
   email
  });
  //se existir, retornar ususario.
  if (userExists) {
   return userExists
  };
  //se não existir, salvar no banco de dados
  const user = this.usersRepository.create({ email });

  await this.usersRepository.save(user);

  return user;

 };
}

export { UserService }
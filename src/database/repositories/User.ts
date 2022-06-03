import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities";


export const UserRepository = AppDataSource.getRepository(UserEntity)

import { AppDataSource } from "../data-source";
import { UserModel } from "../models";


export const UserRepository = AppDataSource.getRepository(UserModel)

import { AppDataSource } from "../data-source";
import { TokenModel } from "../models";

export const TokenRepository = AppDataSource.getRepository(TokenModel)


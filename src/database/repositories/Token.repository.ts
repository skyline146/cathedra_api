import { AppDataSource } from "../data-source";
import { TokenEntity } from "../entities";

export const TokenRepository = AppDataSource.getRepository(TokenEntity)


import { AppDataSource } from "../data-source";
import { CathedraEntity } from "../entities/Cathedra";

export const CathedraRepository = AppDataSource.getRepository(CathedraEntity)
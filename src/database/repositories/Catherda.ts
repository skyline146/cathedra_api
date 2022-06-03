import { AppDataSource } from "../data-source";
import { CathedraModel } from "../models/Cathedra";

export const CathedraRepository = AppDataSource.getRepository(CathedraModel)
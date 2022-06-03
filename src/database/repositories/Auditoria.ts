import { AppDataSource } from "../data-source";
import { AuditoriaModel } from "../models/Auditoria";

export const AuditoriaRepository = AppDataSource.getRepository(AuditoriaModel)


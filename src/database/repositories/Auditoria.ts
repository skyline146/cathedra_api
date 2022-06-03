import { AppDataSource } from "../data-source";
import { AuditoriaEntity } from "../entities/Auditoria";

export const AuditoriaRepository = AppDataSource.getRepository(AuditoriaEntity)


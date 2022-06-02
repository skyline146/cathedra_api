import { AppDataSource } from "../data-source";
import { TokenEntity } from "../entities";
import { AuditoriaEntity } from "../entities/Auditoria";

export const AuditoriaRepository = AppDataSource.getRepository(AuditoriaEntity)


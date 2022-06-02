import { AppDataSource } from "../data-source";
import { TokenEntity } from "../entities";
import { AuditoriaEntity } from "../entities/Auditoria";
import { CarrierEntity } from "../entities/Carrier";
import { CathedraEntity } from "../entities/Cathedra";

export const CathedraRepository = AppDataSource.getRepository(CathedraEntity)
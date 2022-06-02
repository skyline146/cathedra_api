import { AppDataSource } from "../data-source";
import { TokenEntity } from "../entities";
import { AuditoriaEntity } from "../entities/Auditoria";
import { CarrierEntity } from "../entities/Carrier";

export const CarrierRepository = AppDataSource.getRepository(CarrierEntity)
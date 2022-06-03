import { AppDataSource } from "../data-source";
import { CarrierEntity } from "../entities/Carrier";

export const CarrierRepository = AppDataSource.getRepository(CarrierEntity)
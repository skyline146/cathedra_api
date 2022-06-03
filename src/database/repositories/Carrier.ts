import { AppDataSource } from "../data-source";
import { CarrierModel } from "../models/Carrier";

export const CarrierRepository = AppDataSource.getRepository(CarrierModel)
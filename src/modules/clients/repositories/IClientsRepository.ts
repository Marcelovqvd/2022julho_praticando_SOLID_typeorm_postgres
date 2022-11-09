import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../infra/typeorm/entities/Client";

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<void>;
  list(): Promise<Client[]>;
}

export { IClientsRepository };

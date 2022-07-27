import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../infra/typeorm/entities/Client";

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  list(): Promise<Client[]>;
}

export { IClientsRepository };

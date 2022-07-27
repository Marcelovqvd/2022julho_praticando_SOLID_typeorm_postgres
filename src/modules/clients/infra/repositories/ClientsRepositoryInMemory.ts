import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { Client } from "../typeorm/entities/Client";

class ClientsRepositoryInMemory implements IClientsRepository {
  clients: Client[] = [];

  async create({ name, cpf }: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, {
      name,
      cpf,
    });

    this.clients.push(client);

    return client;
  }
}

export { ClientsRepositoryInMemory };

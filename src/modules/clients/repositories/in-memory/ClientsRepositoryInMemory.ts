import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../infra/typeorm/entities/Client";
import { IClientsRepository } from "../IClientsRepository";

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

  async list() {
    return this.clients;
  }
}

export { ClientsRepositoryInMemory };

import { getRepository, Repository } from "typeorm";

import { ICreateClientDTO } from "../../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";
import { Client } from "../entities/Client";

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;
  constructor() {
    this.repository = getRepository(Client);
  }
  async create({ name, cpf }: ICreateClientDTO): Promise<Client> {
    const client = this.repository.create({
      name,
      cpf,
    });

    await this.repository.save(client);

    return client;
  }

  async list(): Promise<Client[]> {
    return this.repository.find();
  }
}

export { ClientsRepository };

import { getRepository, Repository } from "typeorm";

import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";
import { Client } from "@modules/clients/infra/typeorm/entities/Client";

import { IClientsRepository } from "../IClientsRepository";

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create({ name, cpf }: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({
      name,
      cpf,
    });

    await this.repository.save(client);
  }

  async list(): Promise<Client[]> {
    const clients = await this.repository.find();
    return clients;
  }
}

export { ClientsRepository };

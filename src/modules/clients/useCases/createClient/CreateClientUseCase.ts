import { inject, injectable } from "tsyringe";

import { ICreateClientDTO } from "@modules/clients/dtos/ICreateClientDTO";
import { Client } from "@modules/clients/infra/typeorm/entities/Client";
import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({ name, cpf }: ICreateClientDTO): Promise<Client> {
    const client = await this.clientsRepository.create({
      name,
      cpf,
    });

    return client;
  }
}

export { CreateClientUseCase };

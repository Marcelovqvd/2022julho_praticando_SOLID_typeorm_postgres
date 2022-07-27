import { inject, injectable } from "tsyringe";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../infra/typeorm/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

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

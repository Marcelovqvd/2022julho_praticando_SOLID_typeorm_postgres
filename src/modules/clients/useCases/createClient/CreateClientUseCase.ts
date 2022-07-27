import { inject, injectable } from "tsyringe";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepositoryInMemory")
    private clientsRepositoryInMemory: IClientsRepository
  ) {}

  execute({ name, cpf }: ICreateClientDTO) {
    const client = this.clientsRepositoryInMemory.create({
      name,
      cpf,
    });

    return client;
  }
}

export { CreateClientUseCase };

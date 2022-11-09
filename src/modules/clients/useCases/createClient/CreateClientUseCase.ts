import { inject, injectable } from "tsyringe";

import { IClientsRepository } from "@modules/clients/repositories/IClientsRepository";

interface IRequest {
  name: string;
  cpf: number;
}
@injectable()
class CreateClientUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) {}

  async execute({ name, cpf }: IRequest): Promise<void> {
    await this.clientsRepository.create({
      name,
      cpf,
    });
  }
}

export { CreateClientUseCase };

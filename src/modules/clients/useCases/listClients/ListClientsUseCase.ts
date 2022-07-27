import { inject, injectable } from "tsyringe";

import { ClientsRepository } from "../../infra/typeorm/repositories/ClientsRepository";

@injectable()
class ListclientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: ClientsRepository
  ) {}

  async execute() {
    const list = this.clientsRepository.list();
    return list;
  }
}

export { ListclientsUseCase };

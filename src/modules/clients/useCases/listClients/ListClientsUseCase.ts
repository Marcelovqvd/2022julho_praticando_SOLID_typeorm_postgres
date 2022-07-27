import { inject, injectable } from "tsyringe";

import { ClientsRepositoryInMemory } from "../../infra/repositories/ClientsRepositoryInMemory";

@injectable()
class ListclientsUseCase {
  constructor(
    @inject("ClientsRepositoryInMemory")
    private clienstRepositoryInMemory: ClientsRepositoryInMemory
  ) {}

  async execute() {
    const list = this.clienstRepositoryInMemory.list();
    return list;
  }
}

export { ListclientsUseCase };

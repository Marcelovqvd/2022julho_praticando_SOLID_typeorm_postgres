import { container } from "tsyringe";

import { ClientsRepositoryInMemory } from "../../modules/clients/infra/repositories/ClientsRepositoryInMemory";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepositoryInMemory",
  ClientsRepositoryInMemory
);

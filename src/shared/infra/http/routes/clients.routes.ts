import { Router } from "express";

import { CreateClientController } from "../../../../modules/clients/useCases/createClient/CreateClienteController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();

clientsRoutes.post("/", createClientController.handle);

export { clientsRoutes };

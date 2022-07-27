import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListclientsUseCase } from "./ListClientsUseCase";

class ListClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listclientsUseCase = container.resolve(ListclientsUseCase);

    const list = await listclientsUseCase.execute();
    return response.status(200).json(list);
  }
}

export { ListClientsController };

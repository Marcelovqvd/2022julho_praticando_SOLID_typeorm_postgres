import { v4 as uuidv4 } from "uuid";

class Client {
  id: string;
  name: string;
  cpf: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Client };

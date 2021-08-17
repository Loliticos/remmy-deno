import Client from '../Client.ts';

export default class Command {
  client: Client;
  name: string;

  public constructor (client: Client) {
    this.client = client;
    this.name = name;
  }

  execute (..._args: unknown[]) {
    throw new Error("Execute not supported");
  }
}

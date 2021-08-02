import Client from '../Client.ts';

export default class Event {
  client: Client;
  name: string;
  once = false;

  public constructor (client: Client, name: string) {
    this.client = client;
    this.name = name;
  }

  execute (..._args: unknown[]) {
    throw new Error("Execute not supported");
  }
}

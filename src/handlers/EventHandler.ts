import { Collection } from "https://deno.land/x/harmony/mod.ts";
import Listener from "../lib/structures/Listener.ts";
import Client from '../lib/Client.ts';

export default class EventHandler extends Collection<string, Listener> {
  client: Client;

  constructor(client: Client) {
    super();

    this.client = client;

    this.init().catch((err) => console.error(err)/*Sentry.captureException(err)*/);
  }

  async init() {
    console.log("Events inited")
  }
}

import { Client, GatewayIntents } from 'https://deno.land/x/harmony/mod.ts'
import ListenerHandler from "../handlers/ListenerHandler.ts"
import Database from "./database/database.ts";

export default class Remmy extends Client {
  public listeners = new ListenerHandler(this);
  public database: Database;

  public constructor(database: Database) {
    super({
      id: "672591094953017374",
      token: Deno.env.get("BOT_TOKEN"),
      intents: [GatewayIntents.DIRECT_MESSAGES, GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES]
    })

    this.database = database;
    this.start();
  }

  public async start() {
    await this.connect();

    return this.database.create("532294395655880705").then(console.log);
  }
}

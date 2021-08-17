import { Client, GatewayIntents } from 'https://deno.land/x/harmony/mod.ts';
import EventHandler from "../handlers/EventHandler.ts";
import CommandHandler from "../handlers/CommandHandler.ts"
import Database from "./database/database.ts";

export default class Remmy extends Client {
  public commands = new CommandHandler(this);
  public events = new EventHandler(this);
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

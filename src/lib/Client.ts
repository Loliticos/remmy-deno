import { Client, GatewayIntents } from 'https://deno.land/x/harmony/mod.ts'
import ListenerHandler from "../handlers/ListenerHandler.ts"

export default class Remmy extends Client {
  public listeners = new ListenerHandler(this);

  public constructor() {
    super({
      id: "672591094953017374",
      token: Deno.env.get("BOT_TOKEN"),
      intents: [GatewayIntents.DIRECT_MESSAGES, GatewayIntents.GUILDS, GatewayIntents.GUILD_MESSAGES]
    })

    this.start();
  }

  public async start() {


    return this.connect();
  }
}

import { Database as DB, PostgresConnector } from 'https://deno.land/x/denodb/mod.ts';
import User from "./models/User.ts";

export default class Database {
  private database: DB | undefined;
  private users = User;

  public constructor() {
    this.connect().catch(err => console.error(err));
  }

  async connect() {
    /*
    const connection = new PostgresConnector({
      database: 'production',
      host: 'database',
      username: 'remmy',
      password: 'remmyiscool'
    });*/
    const connection = new PostgresConnector({
      uri: "postgresql:/"
     })

    this.database = new DB(connection);
    this.database.link([User]);

    //await this.database.sync();
  }

  async create(id: string) {
    const user = await this.users.find(id);

    if (user) return user;
    else return await this.users.create({ id });
  }

  async get(id: string) {
    // EVENTUALMENTE USAR CACHE
    const user = await this.users.find(id);

    return user;
  }

  async update(id: string, data: any) {
    return this.users.where("id", id).update(data).then(console.log);
  }
}

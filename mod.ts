import Client from "./src/lib/Client.ts";
import Database from "./src/lib/database/database.ts";
import { config } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts';

config({ export: true });

const database = new Database();

new Client(database);

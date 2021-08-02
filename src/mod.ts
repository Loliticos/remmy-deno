import Client from "./lib/Client.ts";
import { config } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts';

config({ export: true });

new Client()

import { TagEntity } from "@/src/tag/tag.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";

export const config: PostgresConnectionOptions = {
    type: "postgres",
    host: "db",
    port: 5432,
    username: 'devuser',
    password: '1234',
    database: 'blog',
    entities: [TagEntity],
    synchronize: true // dont use in production
}

export default config;
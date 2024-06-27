import { ConnectionOptions } from "typeorm";
import { Course } from "./src/entities/Course";

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'database/database.db',
    entities: [Course],
    synchronize: true
}

export default config;
import { ConnectionOptions } from "typeorm";
import { Course } from "./src/entities/Course";
import { Question } from "./src/entities/Question";

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'database/database.db',
    entities: [Course, Question],
    synchronize: true
}

export default config;
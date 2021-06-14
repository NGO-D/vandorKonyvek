"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const books_entity_1 = require("../books/books.entity");
const user_entity_1 = require("../user/user.entity");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [user_entity_1.User,
        books_entity_1.Book],
    synchronize: process.env.TYPEOREM_SYNC || dbConfig.synchronize,
};
//# sourceMappingURL=typeorm.config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = {
        origin: ['http://localhost:4200', 'http://localhost', '*'],
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
    };
    app.enableCors(options);
    const port = 3000;
    await app.listen(port);
    logger.log('App is listening on port: ${port}');
}
bootstrap();
//# sourceMappingURL=main.js.map
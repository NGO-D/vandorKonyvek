"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
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
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
async function bootstrap() {
    const serverConfig = config.get('server');
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
    const port = process.env.PORT || serverConfig.port;
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Vándorkönyvek')
        .setDescription('Ingyenes tankönyv és kötelező olvasmány csere.')
        .setVersion('1.0')
        .addTag('tankönyv')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port).then(() => {
        logger.log(`App is listenning on port : ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
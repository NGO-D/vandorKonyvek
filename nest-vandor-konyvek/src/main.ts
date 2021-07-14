import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  const port = process.env.PORT || serverConfig.port;
  
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Vándorkönyvek')
  .setDescription('Ingyenes tankönyv és kötelező olvasmány csere.')
  //.setBasePath('v1/api')
  //.addBearerAuth('Authorization', 'header')
  .setVersion('1.0')
  .addTag('tankönyv')
  .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port).then(() => {
    logger.log(`App is listenning on port : ${port}`)
  });
  
}
bootstrap();
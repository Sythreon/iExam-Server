import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionMiddleware } from './middlewares/exception.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ExceptionMiddleware());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('iExam Server')
    .setDescription('iExam Server APIs')
    .setVersion('v1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(8089);
}
bootstrap();

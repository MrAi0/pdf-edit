import { NestFactory } from '@nestjs/core';
import { FileUploadModule } from './file-upload/file-upload.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(FileUploadModule);

  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(3000);
}
bootstrap();

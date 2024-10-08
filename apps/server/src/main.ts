import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = process.env.CORS_ALLOWED_HOSTS?.split(',') || [];
  app.use(cookieParser());
  app.enableCors({
    allowedHeaders: 'Content-Type',
    credentials: true,
    origin: allowedOrigins,
    methods: 'GET, POST, PUT, DELETE',
  });
  await app.listen(3000);
}
bootstrap();

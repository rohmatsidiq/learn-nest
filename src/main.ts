import { NestFactory } from '@nestjs/core';
import { TasksModule } from './tasks/tasks.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);

  // buat validator pipe
  app.useGlobalPipes(new ValidationPipe());

  // buat port
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { HabitServiceModule } from './habit-service.module';

async function bootstrap() {
  const app = await NestFactory.create(HabitServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

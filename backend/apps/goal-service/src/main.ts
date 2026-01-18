import { NestFactory } from '@nestjs/core';
import { GoalServiceModule } from './goal-service.module';

async function bootstrap() {
  const app = await NestFactory.create(GoalServiceModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();

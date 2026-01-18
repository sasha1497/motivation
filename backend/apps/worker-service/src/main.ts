import { NestFactory } from '@nestjs/core';
import { WorkerServiceModule } from './worker-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkerServiceModule);
  await app.listen(process.env.port ?? 3008);
}
bootstrap();

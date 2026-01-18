import { NestFactory } from '@nestjs/core';
import { CallEngineServiceModule } from './call-engine-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CallEngineServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { CallEngineServiceController } from './call-engine-service.controller';
import { CallEngineServiceService } from './call-engine-service.service';

@Module({
  imports: [],
  controllers: [CallEngineServiceController],
  providers: [CallEngineServiceService],
})
export class CallEngineServiceModule {}

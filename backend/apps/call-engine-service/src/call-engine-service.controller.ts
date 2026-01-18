import { Controller, Get } from '@nestjs/common';
import { CallEngineServiceService } from './call-engine-service.service';

@Controller()
export class CallEngineServiceController {
  constructor(private readonly callEngineServiceService: CallEngineServiceService) {}

  @Get()
  getHello(): string {
    return this.callEngineServiceService.getHello();
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { CallEngineServiceController } from './call-engine-service.controller';
import { CallEngineServiceService } from './call-engine-service.service';

describe('CallEngineServiceController', () => {
  let callEngineServiceController: CallEngineServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CallEngineServiceController],
      providers: [CallEngineServiceService],
    }).compile();

    callEngineServiceController = app.get<CallEngineServiceController>(CallEngineServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(callEngineServiceController.getHello()).toBe('Hello World!');
    });
  });
});

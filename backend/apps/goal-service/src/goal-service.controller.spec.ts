import { Test, TestingModule } from '@nestjs/testing';
import { GoalServiceController } from './goal-service.controller';
import { GoalServiceService } from './goal-service.service';

describe('GoalServiceController', () => {
  let goalServiceController: GoalServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoalServiceController],
      providers: [GoalServiceService],
    }).compile();

    goalServiceController = app.get<GoalServiceController>(GoalServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(goalServiceController.getHello()).toBe('Hello World!');
    });
  });
});

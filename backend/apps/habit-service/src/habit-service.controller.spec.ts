import { Test, TestingModule } from '@nestjs/testing';
import { HabitServiceController } from './habit-service.controller';
import { HabitServiceService } from './habit-service.service';

describe('HabitServiceController', () => {
  let habitServiceController: HabitServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HabitServiceController],
      providers: [HabitServiceService],
    }).compile();

    habitServiceController = app.get<HabitServiceController>(HabitServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(habitServiceController.getHello()).toBe('Hello World!');
    });
  });
});

import { Module } from '@nestjs/common';
import { GoalServiceController } from './goal-service.controller';
import { GoalServiceService } from './goal-service.service';

@Module({
  imports: [],
  controllers: [GoalServiceController],
  providers: [GoalServiceService],
})
export class GoalServiceModule {}

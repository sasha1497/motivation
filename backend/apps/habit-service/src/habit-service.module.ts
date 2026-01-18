import { Module } from '@nestjs/common';
import { HabitServiceController } from './habit-service.controller';
import { HabitServiceService } from './habit-service.service';

@Module({
  imports: [],
  controllers: [HabitServiceController],
  providers: [HabitServiceService],
})
export class HabitServiceModule {}

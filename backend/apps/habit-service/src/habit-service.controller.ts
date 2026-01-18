import { Controller, Get } from '@nestjs/common';
import { HabitServiceService } from './habit-service.service';

@Controller()
export class HabitServiceController {
  constructor(private readonly habitServiceService: HabitServiceService) {}

  @Get()
  getHello(): string {
    return this.habitServiceService.getHello();
  }
}

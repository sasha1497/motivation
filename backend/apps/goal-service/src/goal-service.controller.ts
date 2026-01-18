import { Controller, Get } from '@nestjs/common';
import { GoalServiceService } from './goal-service.service';

@Controller()
export class GoalServiceController {
  constructor(private readonly goalServiceService: GoalServiceService) {}

  @Get()
  getHello(): string {
    return this.goalServiceService.getHello();
  }
}

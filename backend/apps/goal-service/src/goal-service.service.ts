import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class HabitServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

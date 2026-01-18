import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsServiceService {
  getHello(): string {
    console.log("<-----adskljlka");
    
    return 'Hello W------>!';
  }
}

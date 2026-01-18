import { Injectable } from '@nestjs/common';

@Injectable()
export class CallEngineServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}

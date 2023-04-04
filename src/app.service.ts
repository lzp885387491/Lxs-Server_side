import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  find(): object {
    return {
      status: 200,
      massage: 'success',
      data: {
        username: 'xiaoming',
        age: 18,
      },
    };
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
}

export class ResponseResult<T> {
  code: number;
  message: string;
  data: T;

  constructor(code: number, message: string, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static success(data: any) {
    return new ResponseResult(200, 'success', data);
  }

  static error(error: HttpException | Error) {
    let code = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal Server Error';
    if (error instanceof HttpException) {
      code = error.getStatus();
      message = error.message;
    } else if (error instanceof Error) {
      message = error.message;
    }
    return new ResponseResult(code, message, null);
  }

  static fromData(data: ResponseData<any>): ResponseResult<any> {
    return new ResponseResult(data.code, data.message, data.data);
  }

  toData(): ResponseData<any> {
    return {
      code: this.code,
      message: this.message,
      data: this.data,
    };
  }
}

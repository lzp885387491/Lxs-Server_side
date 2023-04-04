import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * 模块的划分被称为 module
   * 前端写的页面中到的事view层
   * 接口事写在controller层的
   * MVC
   * MVC的优点是什么？
   * M 是吧业务分成不同的模块
   * V 把页面视图写到HTML中
   * C 吧借口写在不同的 Controller中
   * 如果代码发生问题，我们可以快速的定位问题所在
   * 在很久以前没有这种写法时，前后端的代码是混在一起的
   * MVC 就是把业务逻辑 视图层的代码 进行分离解耦   这种写法找问题非常强！
   * 通常情况下，会有逻辑复用的场景
   * 为了解决这个问题
   * 在服务端出现了一个新概念  叫做 serveice
   * 通常情况下 我们的controller层 不做业务逻辑
   * 只负责调用  serveice
   */

  /**
   * RESTFUL 规范
   * 获取  Get
   * 修改部分信息 patch
   * 修改所有字段用 put
   * 删除  delete
   * 创建  post
   */

  // @ 开头的写法  叫注解   spring boot
  // 如果参数接口事Post方法，前端传过来的参数是通过请求体传过来的
  // 如果参数借口是Get方法,前端传过来的参数是通过请求头的URL传过来的

  // 如何接收前端传过来的参数  post是:  @Body() params
  // get是:  @Query() params
  @Post('/acticle/info')
  find(@Body() params: any): object {
    const { id } = params;
    console.log('----------前端传的参数----------');
    console.log(params);
    if (id == 1) {
      return {
        status: 200,
        massage: 'success',
        data: {
          username: 'id===1',
          age: 18,
        },
      };
    }
    return this.appService.find();
  }
  @Post('list')
  findAll(): object {
    return {
      status: 200,
      massage: 'success',
      data: [
        {
          id: 1,
          title: '1',
        },
        {
          id: 2,
          title: '1',
        },
        {
          id: 3,
          title: '1',
        },
      ],
    };
  }
  @Post('delete')
  delete() {
    return {
      status: 200,
      massage: 'success',
      data: [],
    };
  }
  @Post('update')
  updade() {
    return {
      status: 200,
      massage: 'success',
      data: [],
    };
  }
}

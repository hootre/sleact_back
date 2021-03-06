import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //  'abc' 라고 하면 아래  전부 공통으로 'abc'로 바뀐다 공통주소
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get() // Get / abc/ user 하위주소
  getHello() {
    return this.appService.getHello();
  }
  //req, res에 대해서 알아서 여기서 처리
  @Get('user') // Get / abc/ user 하위주소
  getUser() {
    return this.appService.getUser();
  }
}

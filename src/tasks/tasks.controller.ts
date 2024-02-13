import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'OK';
  }

  @Post()
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `Id ${id}`;
  }
}

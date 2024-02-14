import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-tasks-.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  // taskService: TasksService;

  // constructor() {
  //   this.taskService = new TasksService();
  // }

  constructor(public taskService: TasksService) {}

  @Get()
  listTasks() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    const task = await this.taskService.findOne(parseInt(id));

    // error handling dengan exception
    if (!task) {
      // throw new Error('Task not found');
      throw new NotFoundException('Task Not Found');
    }

    return task;
  }
}

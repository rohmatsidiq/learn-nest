import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  //   tasksRepo: TasksRepository;

  //   constructor() {
  //     this.tasksRepo = new TasksRepository();
  //   }

  constructor(public tasksRepo: TasksRepository) {}

  findAll() {
    return this.tasksRepo.findAll();
  }

  findOne(id: number) {
    return this.tasksRepo.findOne(id);
  }

  create(task: string) {
    return this.tasksRepo.create(task);
  }
}

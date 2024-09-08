import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import {
  CreateTaskResponseDto,
  DeleteTaskResponseDto,
  GetAllTasksResponseDto,
  GetTaskByIdResponseDto,
  UpdateTaskResponseDto,
} from './dto/task.response.dto';
import {
  CreateTaskRequestDto,
  UpdateTaskRequestDto,
} from './dto/task.request.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(
    @Param('projectId') projectId: string,
  ): Promise<GetAllTasksResponseDto> {
    return this.taskService.getAllTasks(projectId);
  }

  @Get(':projectId/:taskId')
  async getTaskById(
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
  ): Promise<GetTaskByIdResponseDto> {
    return this.taskService.getTaskById(projectId, taskId);
  }

  @Post(':projectId')
  async createTask(
    @Param('projectId') projectId: string,
    data: CreateTaskRequestDto,
  ): Promise<CreateTaskResponseDto> {
    return this.taskService.createTask(projectId, data);
  }

  @Put(':projectId/:taskId')
  async updateTask(
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
    data: UpdateTaskRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    return this.taskService.updateTask(projectId, taskId, data);
  }

  @Delete(':projectId/:taskId')
  async deleteTask(
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
  ): Promise<DeleteTaskResponseDto> {
    return this.taskService.deleteTask(projectId, taskId);
  }
}

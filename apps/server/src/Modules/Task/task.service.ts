import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../Database/database.service';
import {
  CreateTaskRequestDto,
  UpdateTaskRequestDto,
} from './dto/task.request.dto';
import { DtoMapper } from 'src/Utils/dto.mapper';
import {
  CreateTaskResponseDto,
  DeleteTaskResponseDto,
  GetAllTasksResponseDto,
  GetTaskByIdResponseDto,
  UpdateTaskResponseDto,
} from './dto/task.response.dto';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}

  //Create Task
  async createTask(
    projectId: string,
    data: CreateTaskRequestDto,
  ): Promise<CreateTaskResponseDto> {
    try {
      const newTask = await this.databaseService.task.create({
        data: {
          ...data,
          projectId: projectId,
        },
      });
      if (!newTask) {
        throw new HttpException(
          'Cannot create task',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(newTask, CreateTaskResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Update Task
  async updateTask(
    projectId: string,
    taskId: string,
    data: UpdateTaskRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    try {
      const getTask = await this.databaseService.task.findUnique({
        where: {
          projectId: projectId,
          id: taskId,
        },
      });
      if (!getTask) {
        throw new HttpException('Cannot find task', HttpStatus.NOT_FOUND);
      }
      const updatedTask = await this.databaseService.task.update({
        data: {
          ...data,
          projectId: projectId,
        },
        where: {
          id: taskId,
          projectId: projectId,
        },
      });
      if (!updatedTask) {
        throw new HttpException(
          'Cannot update task',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(updatedTask, UpdateTaskResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Get Task By Id
  async getTaskById(
    projectId: string,
    taskId: string,
  ): Promise<GetTaskByIdResponseDto> {
    try {
      const getTask = await this.databaseService.task.findUnique({
        where: {
          projectId: projectId,
          id: taskId,
        },
      });
      const response = DtoMapper.mapDto(getTask, GetTaskByIdResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Get All Task By projectId
  async getAllTasks(projectId: string): Promise<GetAllTasksResponseDto> {
    try {
      const getAllTask = await this.databaseService.task.findMany({
        where: {
          projectId: projectId,
        },
      });
      const taskArray = getAllTask.map((task) => {
        const dto = new GetTaskByIdResponseDto();
        dto.id = task.id;
        dto.title = task.title;
        dto.description = task.description;
        dto.dueDate = task.dueDate;
        dto.status = task.status;
        return dto;
      });
      const response = new GetAllTasksResponseDto();
      response.tasks = taskArray;
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Delete Task By Id
  async deleteTask(
    projectId: string,
    taskId: string,
  ): Promise<DeleteTaskResponseDto> {
    try {
      const getTask = await this.databaseService.task.findUnique({
        where: {
          id: taskId,
          projectId: projectId,
        },
      });
      if (!getTask) {
        throw new HttpException('Cannot find task', HttpStatus.NOT_FOUND);
      }
      const deletedTask = await this.databaseService.task.delete({
        where: {
          projectId: projectId,
          id: taskId,
        },
      });
      const response = DtoMapper.mapDto(deletedTask, DeleteTaskResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

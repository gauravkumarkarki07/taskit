import { Expose } from 'class-transformer';
import { TaskStatus } from '@prisma/client';

export class CreateTaskResponseDto {
  @Expose()
  id: string;
}

export class UpdateTaskResponseDto {
  @Expose()
  id: string;
}

export class GetTaskByIdResponseDto {
  @Expose()
  id: string;
  @Expose()
  title: string;
  @Expose()
  description?: string;
  @Expose()
  status: TaskStatus;
  @Expose()
  dueDate?: Date;
}

export class GetAllTasksResponseDto {
  @Expose()
  tasks: GetTaskByIdResponseDto[] = [];
}

export class DeleteTaskResponseDto {
  @Expose()
  id: string;
}

import { Expose } from 'class-transformer';

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
  status: string;
  @Expose()
  dueDate?: string;
}

export class GetAllTasksResponseDto {
  @Expose()
  tasks: GetTaskByIdResponseDto[] = [];
}

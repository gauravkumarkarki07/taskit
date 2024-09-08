import { TaskStatus } from '@prisma/client';
export class CreateTaskRequestDto {
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: Date;
}

export class UpdateTaskRequestDto {
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: Date;
}

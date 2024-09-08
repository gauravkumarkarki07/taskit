export class CreateTaskRequestDto {
  title: string;
  description?: string;
  status: string;
  dueDate: Date;
}

export class UpdateTaskRequestDto {
  title: string;
  description?: string;
  status: string;
  dueDate: Date;
}

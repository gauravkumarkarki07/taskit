export class ProjectByIdResponseDto {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
}

export class GetAllProjectResponseDto {
  projects: ProjectByIdResponseDto[] = [];
}

export class DeleteProjectResponseDto {
  id: string;
}

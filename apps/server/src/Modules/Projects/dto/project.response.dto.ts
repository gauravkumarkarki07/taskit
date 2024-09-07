export class ProjectByIdResponseDto {
  id: string;
  title: string;
  description?: string;
}

export class GetAllProjectResponseDto {
  projects: ProjectByIdResponseDto[] = [];
}

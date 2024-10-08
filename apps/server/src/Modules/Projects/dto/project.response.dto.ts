import { Expose } from 'class-transformer';

export class ProjectByIdResponseDto {
  @Expose()
  id: string;
  @Expose()
  title: string;
  @Expose()
  description?: string;
  @Expose()
  createdAt: Date;
}

export class GetAllProjectResponseDto {
  @Expose()
  projects: ProjectByIdResponseDto[] = [];
}

export class DeleteProjectResponseDto {
  @Expose()
  id: string;
}

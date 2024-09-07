import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from '../Database/database.service';
import { DtoMapper } from 'src/Utils/dto.mapper';
import {
  DeleteProjectResponseDto,
  GetAllProjectResponseDto,
  ProjectByIdResponseDto,
} from './dto/project.response.dto';
import {
  CreateProjectRequestDto,
  UpdateProjectRequestDto,
} from './dto/project.request.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly databaseService: DatabaseService) {}

  //Create Project
  async createProject(
    userId: string,
    data: CreateProjectRequestDto,
  ): Promise<ProjectByIdResponseDto> {
    try {
      const newProject = await this.databaseService.project.create({
        data: {
          ...data,
          userId: userId,
        },
      });
      if (!newProject) {
        throw new HttpException(
          'Project cannot be created',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(newProject, ProjectByIdResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Update Project
  async updateProject(
    userId: string,
    projectId: string,
    updatedData: UpdateProjectRequestDto,
  ): Promise<ProjectByIdResponseDto> {
    try {
      const getProject = await this.databaseService.project.findUnique({
        where: {
          id: projectId,
          userId: userId,
        },
      });
      if (!getProject) {
        throw new HttpException('Project doesnt exists', HttpStatus.NOT_FOUND);
      }
      const updatedProject = await this.databaseService.project.update({
        data: {
          ...updatedData,
          userId: userId,
        },
        where: {
          id: projectId,
          userId: userId,
        },
      });
      if (!updatedProject) {
        throw new HttpException(
          'Cannot update project details',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(updatedProject, ProjectByIdResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Get All Projects of User
  async getAllProject(userId: string): Promise<GetAllProjectResponseDto> {
    try {
      const getAllProjects = await this.databaseService.project.findMany({
        where: {
          userId: userId,
        },
      });
      const projectArray = getAllProjects.map((project) => {
        const dto = new ProjectByIdResponseDto();
        dto.id = project.id;
        dto.title = project.title;
        dto.description = project.description;
        dto.createdAt = project.createdAt;
        return dto;
      });
      const response = new GetAllProjectResponseDto();
      response.projects = projectArray;
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Get Project By Id
  async getProjectById(
    userId: string,
    projectId: string,
  ): Promise<ProjectByIdResponseDto> {
    try {
      const getPrjectById = await this.databaseService.project.findUnique({
        where: {
          id: projectId,
          userId: userId,
        },
      });
      const response = DtoMapper.mapDto(getPrjectById, ProjectByIdResponseDto);
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Delete Project By Id
  async deleteProjectById(
    userId: string,
    projectId: string,
  ): Promise<DeleteProjectResponseDto> {
    try {
      const getProjectById = await this.getProjectById(userId, projectId);
      if (!getProjectById) {
        throw new HttpException('Project doesnt exists', HttpStatus.NOT_FOUND);
      }
      const deletedProject = await this.databaseService.project.delete({
        where: {
          id: projectId,
          userId: userId,
        },
      });
      if (!deletedProject) {
        throw new HttpException(
          'Cannot delele project',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const response = DtoMapper.mapDto(
        deletedProject,
        DeleteProjectResponseDto,
      );
      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

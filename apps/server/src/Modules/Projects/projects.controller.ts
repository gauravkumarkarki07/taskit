import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ProjectService } from './projects.service';
import {
  CreateProjectRequestDto,
  UpdateProjectRequestDto,
} from './dto/project.request.dto';
import { JwtMiddlewareRequest } from 'src/Middleware/jwt.middleware';
import {
  DeleteProjectResponseDto,
  ProjectByIdResponseDto,
} from './dto/project.response.dto';

@Controller('project')
export class ProjectsController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('getallprojects')
  async getAllProjects(@Req() req: JwtMiddlewareRequest) {
    const { id: userId } = req.user;
    return await this.projectService.getAllProject(userId);
  }

  @Get('getprojectbyid/:projectId')
  async getProjectById(
    @Param('projectId') projectId: string,
    @Req() req: JwtMiddlewareRequest,
  ) {
    const { id: userId } = req.user;
    return await this.projectService.getProjectById(userId, projectId);
  }

  @Post('createproject')
  async createProject(
    @Body() data: CreateProjectRequestDto,
    @Req() req: JwtMiddlewareRequest,
  ) {
    const { id: userId } = req.user;
    return this.projectService.createProject(userId, data);
  }

  @Put('updateproject/:projectId')
  async updateProject(
    @Param('projectId') projectId: string,
    updatedData: UpdateProjectRequestDto,
    @Req() req: JwtMiddlewareRequest,
  ): Promise<ProjectByIdResponseDto> {
    const { id: userId } = req.user;
    return await this.projectService.updateProject(
      userId,
      projectId,
      updatedData,
    );
  }

  @Delete('deleteproject/:projectId')
  async deleteProject(
    @Param('projectId')
    projectId: string,
    @Req() req: JwtMiddlewareRequest,
  ): Promise<DeleteProjectResponseDto> {
    const { id: userId } = req.user;
    return await this.projectService.deleteProjectById(userId, projectId);
  }
}

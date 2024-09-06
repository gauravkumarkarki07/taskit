import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './Modules/Projects/projects.module';
import { DatabaseModule } from './Modules/Database/database.module';

@Module({
  imports: [ProjectsModule, DatabaseModule, ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

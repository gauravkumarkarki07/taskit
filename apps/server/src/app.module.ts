import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './Modules/Projects/projects.module';
import { DatabaseModule } from './Modules/Database/database.module';
import { AuthModule } from './Modules/Auth/auth.module';

@Module({
  imports: [ProjectsModule, DatabaseModule, ProjectsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './Modules/Projects/projects.module';
import { DatabaseModule } from './Modules/Database/database.module';
import { AuthModule } from './Modules/Auth/auth.module';
import { JwtMiddleware } from './Middleware/jwt.middleware';

@Module({
  imports: [ProjectsModule, DatabaseModule, ProjectsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: '/auth/login', method: RequestMethod.POST },
        { path: '/auth/signup', method: RequestMethod.POST },
        { path: '/auth/verifytoken', method: RequestMethod.GET },
        { path: '/auth/logout', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}

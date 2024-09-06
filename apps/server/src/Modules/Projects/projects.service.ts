import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../Database/database.service';

@Injectable()
export class ProjectService {
  constructor(private readonly databaseService: DatabaseService) {}
}

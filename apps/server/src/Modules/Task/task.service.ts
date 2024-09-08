import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../Database/database.service';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}
}

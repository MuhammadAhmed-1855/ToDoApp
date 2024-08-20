import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TaskService, PrismaService],
})
export class TaskModule {}

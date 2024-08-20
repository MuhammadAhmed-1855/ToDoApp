import { Body, Controller, Get, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
@UseGuards(AuthGuard)
export class TaskController {

        constructor(private readonly taskService: TaskService) {}

        @Post('add')
        add(@Body() data: any, @Request() req) {
            // console.log(req);
            return this.taskService.add(data, req);
        }

        @Get()
        getAll(@Request() req) {
            return this.taskService.getAll(req);
        }

        @Post('update')
        update(@Body() data: any, @Request() req) {
            return this.taskService.update(data, req);
        }
}

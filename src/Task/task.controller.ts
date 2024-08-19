import { Controller, Get, NotImplementedException } from '@nestjs/common';

@Controller('task')
export class TaskController {
        @Get()
        getTask(): string {
            throw new NotImplementedException();
        }
}

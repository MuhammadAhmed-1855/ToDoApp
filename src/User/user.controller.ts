import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
        constructor(private readonly userService: UserService) {}
        
        @Get()
        getAll() {
                return this.userService.getAll();
        }

        @Post('register')
        register(@Body() data: any) {
                return this.userService.register(data);
        }

        @Post('login')
        login(@Body() data: any) {
                return this.userService.login(data);
        }
}

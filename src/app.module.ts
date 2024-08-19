import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), UserModule, TaskModule, PrismaModule, JwtModule.register({ secret: 'AliBaba', signOptions: { expiresIn: '1d' } })],
  controllers: [AppController, UserController, TaskController],
  providers: [AppService, UserService, TaskService, PrismaService],
})
export class AppModule {}

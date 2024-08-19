import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
        imports: [PrismaModule, JwtModule.register({ secret: 'AliBaba', signOptions: { expiresIn: '1d' } })],
        providers: [UserService],
        controllers: [UserController],
})
export class UserModule {}

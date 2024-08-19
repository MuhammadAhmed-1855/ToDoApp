import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

        constructor(
                private prisma: PrismaService,
                private jwtService: JwtService,
        ) {}

        async register(data: any) {
                return this.prisma.prismaClient.user.create({
                        data,
                });
        }

        async login(data: any) {
                const user = await this.prisma.prismaClient.user.findUnique({
                        where: { email: data.email },
                });

                if(user.password !== data.password) {
                        throw new UnauthorizedException('Invalid credentials');
                }

                if (!user) {
                        throw new NotFoundException('User not found');
                }

                const payload = { email: user.email, sub: user.id };

                return {
                        access_token: this.jwtService.sign(payload),
                };
                
        }

        async getAll() {
                return this.prisma.prismaClient.user.findMany();
        }
}

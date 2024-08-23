import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotImplementedException } from '@nestjs/common';

@Injectable()
// @UseGuards(AuthGuard)
export class TaskService {

        constructor(
                private prisma: PrismaService,
        ) {}

        async add(data: any, req: any) {
                const id = req.user.sub;
                data = { ...data, userId: id };
                return this.prisma.prismaClient.task.create({
                        data,
                });
        }

        async getAll(req: any) {
                const id = req.user.sub;
                return this.prisma.prismaClient.task.findMany({
                        where: {
                                userId: id,
                        },
                });
        }

        async update(data: any, req: any) {
                const user_id = req.user.sub;
                console.log("Data: ", data);
                const { id, ...rest } = data;
                return this.prisma.prismaClient.task.update({
                        where: {
                                id: id,
                                userId: user_id,
                        },
                        data: {
                                ...rest,
                        },
                });
        }
}

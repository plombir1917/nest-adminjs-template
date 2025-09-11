import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserEntity } from './entities/user.entity.js';
import { IRepository } from '../interface/repository.interface.js';

@Injectable()
export class UserRepository implements IRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto) {
    return await this.prismaService.user.create({
      data: user,
    });
  }

  async findOne(id: string): Promise<UserEntity> {
    return await this.prismaService.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  async findOneBy(param: Partial<UserEntity>) {
    return await this.prismaService.user.findFirst({ where: param });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prismaService.user.findMany();
  }

  async update(id: string, user: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: string): Promise<UserEntity> {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }

  async count(): Promise<number> {
    return await this.prismaService.user.count();
  }
}

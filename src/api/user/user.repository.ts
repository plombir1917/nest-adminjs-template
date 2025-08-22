import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { UserEntity } from './entities/user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: user,
      });
    } catch (error) {
      throw new Error('Create user error!');
    }
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.user.findUniqueOrThrow({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll() {
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      throw new Error('Find all user error!');
    }
  }

  async update(id: number, user: UpdateUserDto) {
    try {
      return await this.prismaService.user.update({
        where: { id },
        data: user,
      });
    } catch (error) {
      throw new Error('Update user error!');
    }
  }

  async delete(id: number) {
    try {
      return await this.prismaService.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Delete user error!');
    }
  }
}

import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { UserRepository } from './user.repository.js';
import { AuthService } from '../auth/auth.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, AuthService],
  exports: [UserService],
})
export class UserModule {}

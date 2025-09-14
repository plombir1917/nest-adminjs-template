import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ForumPageController } from './forum-page.controller.js';
import { ApiService } from './api.service.js';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [ForumPageController],
  providers: [ApiService],
})
export class ApiModule {}

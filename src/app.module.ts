import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AdminJSModule } from './admin/admin.module.js';

@Module({
  imports: [AdminJSModule, PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

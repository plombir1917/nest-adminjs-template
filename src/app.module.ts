import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AdminJSModule } from './admin/admin.module.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    AdminJSModule,
    PrismaModule,
    UserModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

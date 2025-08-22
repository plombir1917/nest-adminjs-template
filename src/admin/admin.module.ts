import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { AdminJSService } from './admin.service.js';

AdminJS.registerAdapter({ Database, Resource });

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    PrismaModule,
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: (adminService: AdminJSService) => {
          return {
            adminJsOptions: {
              branding: adminService.getBranding(),
              pages: adminService.getPages(),
              rootPath: '/admin',
              resources: adminService.getResources(),
              locale: adminService.getLocale(),
            },
            auth: {
              authenticate,
              cookieName: 'adminjs',
              cookiePassword: 'secret',
            },
            sessionOptions: {
              resave: true,
              saveUninitialized: true,
              secret: 'secret',
            },
          };
        },
        imports: [AdminJSModule],
        inject: [AdminJSService],
      }),
    ),
  ],
  providers: [AdminJSService],
  exports: [AdminJSService],
})
export class AdminJSModule {}

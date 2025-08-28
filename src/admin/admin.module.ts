import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { AdminJSService } from './admin.service.js';
import { DashboardService } from './services/dashboard.service.js';
import { UserModule } from '../api/user/user.module.js';
import { componentLoader } from './components/components.config.js';

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
    UserModule,
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: (adminService: AdminJSService) => {
          return {
            adminJsOptions: {
              componentLoader,

              dashboard: adminService.getDashboard(),
              branding: adminService.getBranding(),
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
  providers: [AdminJSService, DashboardService],
  exports: [AdminJSService],
})
export class AdminJSModule {}

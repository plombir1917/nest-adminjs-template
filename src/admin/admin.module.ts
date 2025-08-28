import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { AdminJSService } from './admin.service.js';
import { DashboardService } from './services/dashboard.service.js';
import { UserModule } from '../api/user/user.module.js';
import { componentLoader } from './components/components.config.js';
import { authenticate } from './auth/auth.js';

AdminJS.registerAdapter({ Database, Resource });

@Module({
  imports: [
    PrismaModule,
    UserModule,
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
              cookieName: 'auth',
              cookiePassword: process.env.SECRET,
            },
            sessionOptions: {
              resave: true,
              saveUninitialized: true,
              secret: process.env.SECRET,
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

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { Database, getModelByName, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';
import { PrismaService } from './prisma/prisma.service.js';

AdminJS.registerAdapter({ Database, Resource });

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

// const authenticate = async (email: string, password: string) => {
//   if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
//     return Promise.resolve(DEFAULT_ADMIN);
//   }
//   return null;
// };

@Module({
  imports: [
    UserModule,
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => {
          const prisma = new PrismaService();
          return {
            adminJsOptions: {
              branding: {
                companyName: 'ОБУ ИТЦ',
                withMadeWithLove: true,
              },
              pages: {
                page: {
                  handler: async (request, response, context) => {
                    return {
                      text: 'I am fetched from the backend',
                    };
                  },
                  component: 'CustomPage',
                },
              },

              rootPath: '/admin',
              resources: [
                {
                  resource: {
                    model: getModelByName('User'),
                    client: prisma,
                  },
                },
              ],
              locale: {
                localeDetection: true,
                language: 'en',
                translations: {
                  // actions,
                  // buttons,
                  // labels,
                  // components,
                  // messages,
                  // properties
                  en: {
                    labels: {
                      User: 'Пользователи',
                    },
                    pages: {
                      page: 'Страница',
                    },
                  },
                },
              },
            },
            // auth: {
            //   authenticate,
            //   cookieName: 'adminjs',
            //   cookiePassword: 'secret',
            // },
            sessionOptions: {
              resave: true,
              saveUninitialized: true,
              secret: 'secret',
            },
          };
        },
      }),
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

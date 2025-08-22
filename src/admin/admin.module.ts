import { BadRequestException, Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Database, getModelByName, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';

AdminJS.registerAdapter({ Database, Resource });

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const ADMIN_API_BASE_URL =
  process.env.ADMIN_API_BASE_URL || 'http://localhost:3002';

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    // AdminJS version 7 is ESM-only. In order to import it, you have to use dynamic imports.
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: (prisma: PrismaService) => {
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
                  options: {
                    listProperties: ['id', 'email', 'name'],
                    actions: {
                      list: {
                        handler: async (request, response, context) => {
                          const res = await fetch(
                            `${ADMIN_API_BASE_URL}/user`,
                            {
                              method: 'GET',
                            },
                          );
                          const items = await res.json();
                          const records = Array.isArray(items)
                            ? items.map((i: any) => context.resource.build(i))
                            : [];
                          return {
                            records,
                            meta: {
                              total: Array.isArray(items) ? items.length : 0,
                            },
                          };
                        },
                      },
                      show: {
                        handler: async (request, response, context) => {
                          const { recordId } = request.params as any;
                          const res = await fetch(
                            `${ADMIN_API_BASE_URL}/user/${recordId}`,
                            {
                              method: 'GET',
                            },
                          );
                          const item = await res.json();
                          const record = context.resource.build(item);
                          return { record };
                        },
                      },
                      new: {
                        handler: async (request, response, context) => {
                          try {
                            const payload = (request as any).payload || {};
                            const res = await fetch(
                              `${ADMIN_API_BASE_URL}/user`,
                              {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(payload),
                              },
                            );
                            console.log(res);
                            const created = await res.json();
                            const record = context.resource.build(created);
                            return {
                              record,
                              redirectUrl: context.h.resourceUrl({
                                resourceId: context.resource.id(),
                              }),
                            };
                          } catch (error) {
                            throw new BadRequestException(error.message);
                          }
                        },
                      },
                      edit: {
                        handler: async (request, response, context) => {
                          const { recordId } = request.params as any;
                          const payload = (request as any).payload || {};
                          const res = await fetch(
                            `${ADMIN_API_BASE_URL}/user/${recordId}`,
                            {
                              method: 'PATCH',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify(payload),
                            },
                          );
                          const updated = await res.json();
                          const record = context.resource.build(updated);
                          return {
                            record,
                            redirectUrl: context.h.recordActionUrl({
                              resourceId: context.resource.id(),
                              recordId,
                              actionName: 'show',
                            }),
                          };
                        },
                      },
                      delete: {
                        handler: async (request, response, context) => {
                          const { recordId } = request.params as any;
                          await fetch(
                            `${ADMIN_API_BASE_URL}/user/${recordId}`,
                            {
                              method: 'DELETE',
                            },
                          );
                          return {
                            redirectUrl: context.h.resourceUrl({
                              resourceId: context.resource.id(),
                            }),
                          };
                        },
                      },
                    },
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
                      prisma: 'База данных',
                    },
                    pages: {
                      page: 'Страница',
                    },
                    properties: {
                      id: 'ID',
                      name: 'Имя',
                      email: 'Email',
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
        imports: [PrismaModule],
        inject: [PrismaService],
      }),
    ),
  ],
})
export class AdminJSModule {}

import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { getModelByName } from '@adminjs/prisma';
import { UserResourceOptions } from './options/resources/user.resource.js';
import { AdminJSBranding } from './options/branding.js';
import { AdminJSPages } from './options/pages.js';
import { AdminJSLocale } from './options/locale.js';

@Injectable()
export class AdminJSService {
  constructor(private readonly prismaService: PrismaService) {}

  getBranding() {
    return AdminJSBranding;
  }

  getPages() {
    return AdminJSPages;
  }

  getLocale() {
    return AdminJSLocale;
  }

  getResources() {
    const resources = [];
    resources.push(this.getUserResource());
    return resources;
  }

  getUserResource() {
    return {
      resource: {
        model: getModelByName('User'),
        client: this.prismaService,
      },
      options: UserResourceOptions,
    };
  }
}

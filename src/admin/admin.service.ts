import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { getModelByName } from '@adminjs/prisma';
import { UserResourceOptions } from './options/resources/user.resource.js';
import { AdminJSBranding } from './options/branding.js';
import { AdminJSLocale } from './options/locale.js';
import { DashboardService } from './services/dashboard.service.js';

@Injectable()
export class AdminJSService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly dashboardService: DashboardService,
  ) {}

  getBranding() {
    return AdminJSBranding;
  }

  getLocale() {
    return AdminJSLocale;
  }

  getDashboard() {
    return this.dashboardService.getDashboard();
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

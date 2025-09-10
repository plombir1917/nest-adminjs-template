import { Injectable } from '@nestjs/common';
import { AdminJSBranding } from './options/branding.js';
import { AdminJSLocale } from './options/locale.js';
import { DashboardService } from './services/dashboard.service.js';
import { AuthService } from '../api/auth/auth.service.js';
import { CurrentAdmin } from 'adminjs';
import { ResourceService } from './services/resource.service.js';

@Injectable()
export class AdminJSService {
  constructor(
    private readonly resourceService: ResourceService,
    private readonly dashboardService: DashboardService,
    private readonly authService: AuthService,
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
    return this.resourceService.getResources();
  }

  async authenticate(email: string, password: string): Promise<CurrentAdmin> {
    try {
      return await this.authService.login(email, password);
    } catch (error) {
      return null;
    }
  }
}

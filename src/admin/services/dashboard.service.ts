import { Injectable } from '@nestjs/common';
import { UserService } from '../../api/user/user.service.js';
import { Components } from '../components/components.config.js';

@Injectable()
export class DashboardService {
  constructor(private readonly userService: UserService) {}

  getDashboard() {
    return {
      component: Components.Dashboard,
      handler: async () => await this.getDashboardMetrics(),
    };
  }

  async getDashboardMetrics() {
    const users = await this.userService.findAll();
    return {
      adminJSVersion: process.env.ADMINJS_VERSION,
      usersCount: users.length,
      users: users,
      serverTime: new Date().toISOString(),
    };
  }
}

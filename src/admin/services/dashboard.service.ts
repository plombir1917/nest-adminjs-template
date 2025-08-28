import { Injectable } from '@nestjs/common';
import { UserService } from 'src/api/user/user.service.js';

@Injectable()
export class DashboardService {
  constructor(private readonly userService: UserService) {}

  async getDashboardMetrics() {
    const usersCount = await this.userService.count();
    return {
      adminJSVersion: process.env.ADMINJS_VERSION,
      usersCount,
      serverTime: new Date().toISOString(),
    };
  }
}

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service.js';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    if (!req.headers?.auth) return false;
    const { email, password } = JSON.parse(req.headers.auth);

    return (await this.authService.validateUser(email, password))
      ? true
      : false;
  }
}

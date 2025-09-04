import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { comparePassword } from '../../utils/bcrypt.js';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(email: string, rawPassword: string) {
    try {
      const user = await this.userService.findOneByEmail(email);
      if (user && (await comparePassword(rawPassword, user.password))) {
        return { email, password: user.password };
      }
      return null;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async validateUser(email: string, hashPassword: string) {
    try {
      const user = await this.userService.findOneByEmail(email);

      return user && user.password === hashPassword ? true : false;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { comparePassword } from '../../utils/bcrypt.js';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userService.findOneByEmail(email);
      if (user && (await comparePassword(password, user.password))) {
        return { email: user.email, password: user.password };
      }
      return null;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}

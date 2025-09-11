import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { UserRepository } from './user.repository.js';
import { CreateError } from '../errors/create.error.js';
import { FindError } from '../errors/find.error.js';
import { UpdateError } from '../errors/update.error.js';
import { DeleteError } from '../errors/delete.error.js';
import { encodePassword } from '../../utils/bcrypt.js';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await encodePassword(createUserDto.password);
      return await this.userRepository.create(createUserDto);
    } catch (error) {
      throw new CreateError('User');
    }
  }

  async findAll() {
    try {
      return await this.userRepository.findAll();
    } catch (error) {
      throw new FindError('User');
    }
  }

  async findOne(id: number) {
    try {
      return await this.userRepository.findOne(id);
    } catch (error) {
      throw new FindError('User');
    }
  }

  async findOneByEmail(email: string) {
    try {
      return await this.userRepository.findOneBy({ email: email });
    } catch (error) {
      throw new FindError('User');
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      if (updateUserDto.password)
        if (updateUserDto.password && user.password !== updateUserDto.password)
          updateUserDto.password = await encodePassword(updateUserDto.password);

      return await this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw new UpdateError('User');
    }
  }

  async delete(id: number) {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      throw new DeleteError('User');
    }
  }

  async count() {
    try {
      return await this.userRepository.count();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { main, main_photo } from '@prisma/client';

export class MainEntity implements main {
  @ApiProperty()
  id: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  about: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ example: [{ id: 1, photo: 'path' }] })
  main_photo?: main_photo[];
}

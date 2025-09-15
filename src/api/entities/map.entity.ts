import { ApiProperty } from '@nestjs/swagger';
import { map } from '@prisma/client';

export class MapEntity implements map {
  @ApiProperty()
  id: string;

  @ApiProperty()
  photo: string;
}

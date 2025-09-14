import { ApiProperty } from '@nestjs/swagger';
import { routine } from '@prisma/client';

export class RoutineEntity implements routine {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  file: string;
}

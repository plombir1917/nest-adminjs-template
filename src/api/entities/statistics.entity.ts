import { ApiProperty } from '@nestjs/swagger';
import { statistics } from '@prisma/client';

export class StatisticsEntity implements statistics {
  @ApiProperty()
  id: string;

  @ApiProperty()
  number: number;

  @ApiProperty()
  description: string;
}

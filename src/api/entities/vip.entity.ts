import { ApiProperty } from '@nestjs/swagger';
import { vip } from '@prisma/client';

export class VipEntity implements vip {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  description: string;
}

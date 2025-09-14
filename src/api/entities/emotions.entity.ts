import { ApiProperty } from '@nestjs/swagger';
import { emotions, emotions_photo } from '@prisma/client';

export class EmotionsEntity implements emotions {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  text: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  photo: string;

  @ApiProperty({
    example: [{ id: 1, photo: 'path' }],
  })
  emotions_photo?: emotions_photo[];
}

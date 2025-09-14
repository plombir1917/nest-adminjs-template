import { ApiProperty } from '@nestjs/swagger';
import { gallery } from '@prisma/client';

export class GalleryEntity implements gallery {
  @ApiProperty()
  id: string;

  @ApiProperty()
  photo: string;
}

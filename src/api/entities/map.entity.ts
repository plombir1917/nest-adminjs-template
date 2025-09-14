import { map } from '@prisma/client';

export class MapEntity implements map {
  id: string;
  photo: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { emotions, gallery, main, map, statistics, vip } from '@prisma/client';

export class PageDataEntity {
  @ApiProperty({
    example: [
      {
        id: '9cf9da91-733f-49e3-9737-016285eeb623',
        number: 123,
        description: 'Описание статистики',
      },
    ],
    description: 'Статистика',
  })
  statistics: statistics[];

  @ApiProperty({
    example: {
      id: '97d6f22e-54a2-46d7-956a-6bf1d4b78e79',
      text: 'Вау, я в восторге от этого',
      name: 'Эмоциональный Человек',
      description: 'Эмоции, описание',
      photo:
        '97d6f22e-54a2-46d7-956a-6bf1d4b78e79/7rxzEFonTIaCEGaA0TRlBYmUVQ8K9dyoTvs1F59GZA56tCP2LHK61QPhGlH712xy8eV8TmJdZ7klAtJUKTjRDmvR.jpg',
      emotions_photos: [
        {
          photo:
            'http://localhost:3002/public/image/d79a1768-481a-472d-a845-43498d889ca9/7rxzEFonTIaCEGaA0TRlBYmUVQ8K9dyoTvs1F59GZA56tCP2LHK61QPhGlH712xy8eV8TmJdZ7klAtJUKTjRDmvR.jpg',
        },
      ],
    },
    description: 'Эмоции',
  })
  emotions: emotions;

  @ApiProperty({
    example: [
      {
        id: '2349a884-bfb9-42cd-8dfe-0873cc45a5af',
        name: 'Гость Экспертович',
        description: 'Гости и эксперты, описание',
        photo:
          '2349a884-bfb9-42cd-8dfe-0873cc45a5af/7rxzEFonTIaCEGaA0TRlBYmUVQ8K9dyoTvs1F59GZA56tCP2LHK61QPhGlH712xy8eV8TmJdZ7klAtJUKTjRDmvR.jpg',
      },
    ],
    description: 'Гости и эксперты',
  })
  vip: vip[];

  @ApiProperty({
    example: {
      id: '9c555e61-ab9b-4f81-9bf6-8537b50f5595',
      photo:
        '9c555e61-ab9b-4f81-9bf6-8537b50f5595/7rxzEFonTIaCEGaA0TRlBYmUVQ8K9dyoTvs1F59GZA56tCP2LHK61QPhGlH712xy8eV8TmJdZ7klAtJUKTjRDmvR.jpg',
    },
    description: 'Карта',
  })
  map: map;

  @ApiProperty({
    example: [
      {
        id: '12a5f25b-d2c5-4133-bca1-a886b03e6409',
        photo:
          '12a5f25b-d2c5-4133-bca1-a886b03e6409/7rxzEFonTIaCEGaA0TRlBYmUVQ8K9dyoTvs1F59GZA56tCP2LHK61QPhGlH712xy8eV8TmJdZ7klAtJUKTjRDmvR.jpg',
      },
    ],
    description: 'Галерея',
  })
  gallery: gallery[];
}

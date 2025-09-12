import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ApiService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMain() {
    const main = await this.prismaService.main.findFirst({
      include: {
        main_photos: {
          select: { photo: true },
        },
      },
    });

    main.main_photos = main.main_photos.map((item) => {
      item.photo = process.env.BASE_PHOTO_URL + item.photo;
      return item;
    });

    return main;
  }

  async getStatistics() {
    return await this.prismaService.statistics.findMany();
  }

  async getEmotions() {
    const emotions = await this.prismaService.emotions.findFirstOrThrow({
      include: {
        emotions_photos: {
          select: { photo: true },
        },
      },
    });

    emotions.emotions_photos = emotions.emotions_photos.map((item) => {
      item.photo = process.env.BASE_PHOTO_URL + item.photo;
      return item;
    });

    return emotions;
  }

  async getVip() {
    return await this.prismaService.vip.findMany();
  }

  async getMap() {
    return await this.prismaService.map.findFirst();
  }

  async getGallery() {
    return await this.prismaService.gallery.findMany();
  }
}

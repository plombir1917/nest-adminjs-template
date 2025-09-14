import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  setFullFilePathForPhotoField,
  setFullFilePathForPhotoFieldInArray,
} from '../utils/file-path.js';

@Injectable()
export class ApiService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMain() {
    const main = await this.prismaService.main.findFirst();
    let main_photos = await this.prismaService.main_photo.findMany();

    main.photo = setFullFilePathForPhotoField(main.photo);
    main_photos = setFullFilePathForPhotoFieldInArray(main_photos);

    return main;
  }

  async getStatistics() {
    return await this.prismaService.statistics.findMany();
  }

  async getEmotions() {
    const emotions = await this.prismaService.emotions.findFirstOrThrow();
    let emotions_photos = await this.prismaService.emotions_photo.findMany();

    emotions.photo = setFullFilePathForPhotoField(emotions.photo);
    emotions_photos = setFullFilePathForPhotoFieldInArray(emotions_photos);

    return emotions;
  }

  async getVip() {
    const vip = await this.prismaService.vip.findMany();

    return setFullFilePathForPhotoFieldInArray(vip);
  }

  async getMap() {
    const map = await this.prismaService.map.findFirst();
    map.photo = setFullFilePathForPhotoField(map.photo);
    return map;
  }

  async getGallery() {
    const gallery = await this.prismaService.gallery.findMany();
    return setFullFilePathForPhotoFieldInArray(gallery);
  }
}

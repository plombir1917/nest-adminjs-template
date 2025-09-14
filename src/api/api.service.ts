import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  setFullFilePathForFileFieldInArray,
  setFullFilePathForPhotoField,
  setFullFilePathForPhotoFieldInArray,
} from '../utils/file-path.js';
import { MainEntity } from './entities/main.entity.js';
import { EmotionsEntity } from './entities/emotions.entity.js';

@Injectable()
export class ApiService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMain() {
    const main: MainEntity = await this.prismaService.main.findFirst();
    let main_photo = await this.prismaService.main_photo.findMany();

    main.photo = setFullFilePathForPhotoField(main.photo);
    main.main_photo = setFullFilePathForPhotoFieldInArray(main_photo);

    return main;
  }

  async getStatistics() {
    return await this.prismaService.statistics.findMany();
  }

  async getEmotions() {
    const emotions: EmotionsEntity =
      await this.prismaService.emotions.findFirstOrThrow();
    let emotions_photo = await this.prismaService.emotions_photo.findMany();

    emotions.photo = setFullFilePathForPhotoField(emotions.photo);
    emotions.emotions_photo =
      setFullFilePathForPhotoFieldInArray(emotions_photo);

    return emotions;
  }

  async getRoutine() {
    const routine = await this.prismaService.routine.findMany();
    return setFullFilePathForFileFieldInArray(routine);
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

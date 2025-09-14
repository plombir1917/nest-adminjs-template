import { getModelByName } from '@adminjs/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { VipResourceOptions } from '../options/resources/vip.resourse.js';
import { UserResourceOptions } from '../options/resources/user.resource.js';
import { uploadImageFeature } from '../features/upload-image.feature.js';
import { ResourceWithOptions } from 'adminjs';
import { GalleryResourceOptions } from '../options/resources/gallery.resource.js';
import { MapResourceOptions } from '../options/resources/map.resource.js';
import { EmotionsPhotoResourceOptions } from '../options/resources/emotions-photo.resource.js';
import { EmotionsResourceOptions } from '../options/resources/emotions.resource.js';
import { StatisticsResourceOptions } from '../options/resources/statistics.resource.js';
import { MainResourceOptions } from '../options/resources/main.resource.js';
import { MainPhotoResourceOptions } from '../options/resources/main-photo.resource.js';
import { RoutineResourceOptions } from '../options/resources/routine.resource.js';
import { uploadFilesFeature } from '../features/upload-file.feature.js';

@Injectable()
export class ResourceService {
  constructor(private readonly prismaService: PrismaService) {}

  getResources(): ResourceWithOptions[] {
    const resources = [];
    resources.push(this.getUserResource());
    resources.push(this.getMainResource());
    resources.push(this.getMainPhotoResource());
    resources.push(this.getStatisticsResource());
    resources.push(this.getEmotionsResource());
    resources.push(this.getEmotionsPhotoResource());
    resources.push(this.getRoutineResource());
    resources.push(this.getVipResource());
    resources.push(this.getMapResource());
    resources.push(this.getGalleryResource());

    return resources;
  }

  private getMainResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('main'),
        client: this.prismaService,
      },
      options: MainResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getMainPhotoResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('main_photo'),
        client: this.prismaService,
      },
      options: MainPhotoResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getVipResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('vip'),
        client: this.prismaService,
      },
      options: VipResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getMapResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('map'),
        client: this.prismaService,
      },
      options: MapResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getEmotionsResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('emotions'),
        client: this.prismaService,
      },
      options: EmotionsResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getEmotionsPhotoResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('emotions_photo'),
        client: this.prismaService,
      },
      options: EmotionsPhotoResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getRoutineResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('routine'),
        client: this.prismaService,
      },
      options: RoutineResourceOptions,
      features: [uploadFilesFeature],
    };
  }

  private getStatisticsResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('statistics'),
        client: this.prismaService,
      },
      options: StatisticsResourceOptions,
    };
  }

  private getUserResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('user'),
        client: this.prismaService,
      },
      options: UserResourceOptions,
    };
  }

  private getGalleryResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('gallery'),
        client: this.prismaService,
      },
      options: GalleryResourceOptions,
      features: [uploadImageFeature],
    };
  }
}

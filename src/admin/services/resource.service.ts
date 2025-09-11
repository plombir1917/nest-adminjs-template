import { getModelByName } from '@adminjs/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { vipResourceOptions } from '../options/resources/vip.resourse.js';
import { UserResourceOptions } from '../options/resources/user.resource.js';
import { uploadImageFeature } from '../features/upload-image.feature.js';
import { ResourceWithOptions } from 'adminjs';
import { galleryResourceOptions } from '../options/resources/gallery.resource.js';
import { mapResourceOptions } from '../options/resources/map.resource.js';
import { emotionsPhotoResourceOptions } from '../options/resources/emotions-photo.resource.js';
import { emotionsResourceOptions } from '../options/resources/emotions.resource.js';
import { StatisticsResourceOptions } from '../options/resources/statistics.resource.js';

@Injectable()
export class ResourceService {
  constructor(private readonly prismaService: PrismaService) {}

  getResources(): ResourceWithOptions[] {
    const resources = [];
    resources.push(this.getUserResource());
    resources.push(this.getVipResource());
    resources.push(this.getGalleryResource());
    resources.push(this.getMapResource());
    resources.push(this.getEmotionsResource());
    resources.push(this.getEmotionsPhotoResource());
    resources.push(this.getStatisticsResource());
    return resources;
  }

  private getVipResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('vip'),
        client: this.prismaService,
      },
      options: vipResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getMapResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('Map'),
        client: this.prismaService,
      },
      options: mapResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getEmotionsResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('Emotions'),
        client: this.prismaService,
      },
      options: emotionsResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getEmotionsPhotoResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('Emotions_photo'),
        client: this.prismaService,
      },
      options: emotionsPhotoResourceOptions,
      features: [uploadImageFeature],
    };
  }

  private getStatisticsResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('Statistics'),
        client: this.prismaService,
      },
      options: StatisticsResourceOptions,
    };
  }

  private getUserResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('User'),
        client: this.prismaService,
      },
      options: UserResourceOptions,
    };
  }

  private getGalleryResource(): ResourceWithOptions {
    return {
      resource: {
        model: getModelByName('Gallery'),
        client: this.prismaService,
      },
      options: galleryResourceOptions,
      features: [uploadImageFeature],
    };
  }
}

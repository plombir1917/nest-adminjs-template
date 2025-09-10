import { getModelByName } from '@adminjs/prisma';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { vipResourceOptions } from '../options/resources/vip.resourse.js';
import { UserResourceOptions } from '../options/resources/user.resource.js';
import { uploadImageFeature } from '../features/upload-image.feature.js';
import { ResourceWithOptions } from 'adminjs';
import { galleryResourceOptions } from '../options/resources/gallery.resource.js';

@Injectable()
export class ResourceService {
  constructor(private readonly prismaService: PrismaService) {}

  getResources(): ResourceWithOptions[] {
    const resources = [];
    resources.push(this.getUserResource());
    resources.push(this.getVipResource());
    resources.push(this.getGalleryResource());
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

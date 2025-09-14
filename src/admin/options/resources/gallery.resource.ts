import { ResourceOptions } from 'adminjs';

export const GalleryResourceOptions: ResourceOptions = {
  navigation: {
    name: 'Страница форума',
  },
  properties: {
    uploadPhoto: {
      isVisible: true,
    },
    photo: {
      isVisible: false,
    },
  },
};

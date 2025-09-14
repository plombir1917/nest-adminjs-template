import { ResourceOptions } from 'adminjs';

export const EmotionsPhotoResourceOptions: ResourceOptions = {
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

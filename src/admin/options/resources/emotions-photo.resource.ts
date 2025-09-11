import { ResourceOptions } from 'adminjs';

export const EmotionsPhotoResourceOptions: ResourceOptions = {
  navigation: {
    name: 'Фото',
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

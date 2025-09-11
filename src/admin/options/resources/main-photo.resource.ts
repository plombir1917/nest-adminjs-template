import { ResourceOptions } from 'adminjs';

export const MainPhotoResourceOptions: ResourceOptions = {
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

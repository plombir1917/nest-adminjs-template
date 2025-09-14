import { ResourceOptions } from 'adminjs';

export const EmotionsResourceOptions: ResourceOptions = {
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

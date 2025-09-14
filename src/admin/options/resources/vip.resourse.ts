import { ResourceOptions } from 'adminjs';

export const VipResourceOptions: ResourceOptions = {
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

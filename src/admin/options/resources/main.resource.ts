import { ResourceOptions } from 'adminjs';

export const MainResourceOptions: ResourceOptions = {
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

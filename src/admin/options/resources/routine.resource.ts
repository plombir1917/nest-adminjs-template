import { ResourceOptions } from 'adminjs';

export const RoutineResourceOptions: ResourceOptions = {
  navigation: {
    name: 'Страница форума',
  },
  properties: {
    uploadFile: {
      isVisible: true,
    },
    file: {
      isVisible: false,
    },
  },
};

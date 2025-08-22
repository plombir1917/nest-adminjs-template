import { AdminPages } from 'adminjs';

export const AdminJSPages: AdminPages = {
  page: {
    handler: async (request, response, context) => {
      return {
        text: 'I am fetched from the backend',
      };
    },
    component: 'CustomPage',
  },
};

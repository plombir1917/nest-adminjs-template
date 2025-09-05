import { componentLoader } from '../components/components.config.js';
import uploadFeature from '@adminjs/upload';
import { join } from 'path';

export const uploadImageFeature = uploadFeature({
  componentLoader,
  provider: {
    local: {
      bucket: join(process.cwd(), 'public'),
      opts: { baseUrl: '/public' },
    },
  }, // путь хранения файлов
  properties: {
    key: 'photo',
    file: 'uploadPhoto', // временное поле для формы
    mimeType: 'mimeType', // опционально
  },
  uploadPath: (record, filename) => {
    const id = record?.id?.();
    return `${id}-${filename}`;
  },
});

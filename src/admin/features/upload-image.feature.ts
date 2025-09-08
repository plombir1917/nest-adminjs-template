import { componentLoader } from '../components/components.config.js';
import uploadFeature from '@adminjs/upload';
import { join } from 'path';

export const uploadImageFeature = uploadFeature({
  validation: {
    maxSize: 1024 * 1024 * 10,
    mimeTypes: ['image/jpeg', 'image/png', 'image/jpg'],
  },
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

componentLoader.override('UploadEditComponent', '../components/upload-edit');

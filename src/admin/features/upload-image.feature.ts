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
      bucket: join(process.cwd(), 'public/image'),
      opts: { baseUrl: '/public/image' },
    },
  }, // путь хранения файлов
  properties: {
    key: 'photo',
    mimeType: 'mimeType', // опционально
  },
});

componentLoader.override('UploadEditComponent', '../components/upload-edit');

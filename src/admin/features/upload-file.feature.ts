import { componentLoader } from '../components/components.config.js';
import uploadFeature from '@adminjs/upload';
import { join } from 'path';

export const uploadFilesFeature = uploadFeature({
  validation: {
    maxSize: 1024 * 1024 * 10,
    mimeTypes: ['application/pdf'],
  },
  componentLoader,
  provider: {
    local: {
      bucket: join(process.cwd(), 'public/file'),
      opts: { baseUrl: '/public/file' },
    },
  }, // путь хранения файлов
  properties: {
    key: 'file',
    file: 'uploadFile',
  },
});

componentLoader.override('UploadEditComponent', '../components/upload-edit');

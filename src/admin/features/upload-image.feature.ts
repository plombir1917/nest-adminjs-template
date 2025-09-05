import { componentLoader } from '../components/components.config.js';
import uploadFeature from '@adminjs/upload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadImageFeature = uploadFeature({
  validation: {
    mimeTypes: ['image/png', 'image/jpeg', 'application/pdf', 'audio/mpeg'],
  },
  componentLoader,
  provider: {
    local: {
      bucket: join(__dirname, '../../../public'),
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

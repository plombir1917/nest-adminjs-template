import { componentLoader } from '../components/components.config.js';
import uploadFeature from '@adminjs/upload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadImageFeature = uploadFeature({
  componentLoader,
  provider: {
    local: {
      bucket: join(__dirname, '../../../uploads'),
      opts: { baseUrl: '/uploads' },
    },
  }, // путь хранения файлов
  properties: {
    key: 'photo',
    file: 'uploadPhoto', // временное поле для формы
    mimeType: 'mimeType', // опционально
  },
  uploadPath: (record, filename) => {
    const id = record?.id?.();
    return `vip/${id}-${filename}`;
  },
});

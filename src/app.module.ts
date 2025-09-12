import { Module } from '@nestjs/common';
import { AdminJSModule } from './admin/admin.module.js';
import { ApiModule } from './api/api.module.js';

@Module({
  imports: [AdminJSModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

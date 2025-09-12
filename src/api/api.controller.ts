import { Controller, Get } from '@nestjs/common';
import { PageDataEntity } from './entities/page-data.entity.js';
import { ApiService } from './api.service.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('api')
@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('page-data')
  @ApiOperation({
    summary: 'Получить данные страницы',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: PageDataEntity,
  })
  async getPageData() {
    const pageData = new PageDataEntity();
    pageData.main = await this.apiService.getMain();
    pageData.statistics = await this.apiService.getStatistics();
    pageData.emotions = await this.apiService.getEmotions();
    pageData.vip = await this.apiService.getVip();
    pageData.map = await this.apiService.getMap();
    pageData.gallery = await this.apiService.getGallery();
    return pageData;
  }
}

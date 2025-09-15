import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service.js';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MainEntity } from './entities/main.entity.js';
import { StatisticsEntity } from './entities/statistics.entity.js';
import { EmotionsEntity } from './entities/emotions.entity.js';
import { RoutineEntity } from './entities/routine.entity.js';
import { VipEntity } from './entities/vip.entity.js';
import { MapEntity } from './entities/map.entity.js';
import { GalleryEntity } from './entities/gallery.entity.js';

@ApiTags('Страница форума')
@Controller('forum-page')
export class ForumPageController {
  constructor(private readonly apiService: ApiService) {}

  @Get('main')
  @ApiOperation({
    summary: 'Получить данные блока "Главная"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: MainEntity,
  })
  async getMain() {
    return await this.apiService.getMain();
  }

  @Get('statistics')
  @ApiOperation({
    summary: 'Получить данные блока "Статистика"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: [StatisticsEntity],
  })
  async getStatistics() {
    return await this.apiService.getStatistics();
  }

  @Get('emotions')
  @ApiOperation({
    summary: 'Получить данные блока "Эмоции"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: EmotionsEntity,
  })
  async getEmotions() {
    return await this.apiService.getEmotions();
  }

  @Get('routine')
  @ApiOperation({
    summary: 'Получить данные блока "Распорядок дней"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: [RoutineEntity],
  })
  async getRoutine() {
    return await this.apiService.getRoutine();
  }

  @Get('vip')
  @ApiOperation({
    summary: 'Получить данные блока "Гости и эксперты"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: [VipEntity],
  })
  async getVip() {
    return await this.apiService.getVip();
  }

  @Get('map')
  @ApiOperation({
    summary: 'Получить данные блока "Карта"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: MapEntity,
  })
  async getMap() {
    return await this.apiService.getMap();
  }

  @Get('gallery')
  @ApiOperation({
    summary: 'Получить данные блока "Галерея"',
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: [GalleryEntity],
  })
  async getGallery() {
    return await this.apiService.getGallery();
  }
}

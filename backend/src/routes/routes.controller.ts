import { Controller, Get, Post, Body, Put, Param, Delete, UseInterceptors } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('routes')
@UseInterceptors(LoggingInterceptor)
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.routesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.routesService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  
  constructor(
    @InjectRepository(Route)
    private routesRepository: Repository<Route>,
  ){}

  async create(createRouteDto: CreateRouteDto) {
    await this.routesRepository.update(
      { assignedHistoryId: createRouteDto.assignedHistoryId, isActive: true },
      { isActive: false },
    );
    return await this.routesRepository.save(createRouteDto);
  }

  async findAll(): Promise<Route[]> {
    return this.routesRepository.find();
  }

  findOne(id: number): Promise<Route> {
    return this.routesRepository.findOneBy({id});
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.routesRepository.update(id, updateRouteDto);
  }

  async remove(id: number) {
    await this.routesRepository.delete(id);
  }
}

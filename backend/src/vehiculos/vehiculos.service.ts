import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';

@Injectable()
export class VehiculosService {

  constructor(
    @InjectRepository(Vehiculo) private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo: Vehiculo = new Vehiculo();

    vehiculo.id_conductor = createVehiculoDto.id_conductor
    vehiculo.marca = createVehiculoDto.marca
    vehiculo.modelo = createVehiculoDto.modelo
    vehiculo.vin = createVehiculoDto.vin
    vehiculo.placa = createVehiculoDto.placa
    vehiculo.fecha_compra = createVehiculoDto.fecha_compra
    vehiculo.costo = createVehiculoDto.costo
    vehiculo.foto_url = createVehiculoDto.foto_url
    vehiculo.fecha_ingreso = createVehiculoDto.fecha_ingreso

    return this.vehiculoRepository.save(vehiculo);
  }

  findAll(): Promise<Vehiculo[]> {
    return this.vehiculoRepository.find()
  }

  findOne(id_vehiculo: number): Promise<Vehiculo> {
    return this.vehiculoRepository.findOneBy({ id_vehiculo });
  }

  update(id_vehiculo: number, updateVehiculoDto: UpdateVehiculoDto) {
    const vehiculo: Vehiculo = new Vehiculo();

    vehiculo.id_conductor = updateVehiculoDto.id_conductor
    vehiculo.marca = updateVehiculoDto.marca
    vehiculo.modelo = updateVehiculoDto.modelo
    vehiculo.vin = updateVehiculoDto.vin
    vehiculo.placa = updateVehiculoDto.placa
    vehiculo.fecha_compra = updateVehiculoDto.fecha_compra
    vehiculo.costo = updateVehiculoDto.costo
    vehiculo.foto_url = updateVehiculoDto.foto_url
    vehiculo.fecha_ingreso = updateVehiculoDto.fecha_ingreso

    return this.vehiculoRepository.save(vehiculo);
  }

  remove(id_vehiculo: number): Promise<{ affected?: number}> {
    return this.vehiculoRepository.delete({id_vehiculo});
  }
}

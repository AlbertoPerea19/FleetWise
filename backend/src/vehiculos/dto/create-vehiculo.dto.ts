import {
    IsDate,
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength,
  } from 'class-validator';
  
export class CreateVehiculoDto {
    @IsInt()
    id_conductor: number;

    @IsString()
    @MinLength(3, { message: 'La marca del vehiculo debe tener al menos 3 caracteres.' })
    @IsNotEmpty()
    marca: string;

    @IsString()
    @MinLength(3, { message: 'El modelo del vehiculo debe tener al menos 3 caracteres.' })
    @IsNotEmpty()
    modelo: string;

    @IsString()
    @IsNotEmpty()
    vin: string;

    @IsString()
    @IsNotEmpty()
    placa: string;

    @IsDate()
    @IsNotEmpty()
    fecha_compra: Date;

    @IsInt()
    @IsNotEmpty()
    costo: number;

    @IsString()
    @IsNotEmpty()
    foto_url: string;

    @IsDate()
    @IsNotEmpty()
    fecha_ingreso: Date;
}

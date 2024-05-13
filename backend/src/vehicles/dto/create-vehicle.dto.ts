import { IsDateString, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateVehicleDto {
   @IsString()
   @IsNotEmpty()
   brand: string;

   @IsString()
   @IsNotEmpty()
   model: string;

   @IsString()
   @IsNotEmpty()
   @Length(17, 17, { message: 'El VIN del vehículo debe tener exactamente 17 caracteres.' })
   vin: string;

   @IsString()
   @IsNotEmpty()
   plate: string;

   @IsDateString()
   @IsNotEmpty()
   purchasedDate: Date;

   @IsNumber()
   @IsNotEmpty()
   cost: number;

   @IsString()
   photoUrl: string;
}

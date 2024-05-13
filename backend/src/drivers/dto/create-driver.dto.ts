import { IsNotEmpty, IsString, IsDateString, IsNumber, Matches, Length } from 'class-validator';

const CURP_REGEX = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/;

export class CreateDriverDto {
   @IsNotEmpty()
   @IsString()
   firstName: string;

   @IsNotEmpty()
   @IsString()
   lastName: string;

   @IsNotEmpty()
   @IsDateString()
   birthDate: Date;

   @IsNotEmpty()
   @IsNumber()
   licenseNumber: number;

   @IsNotEmpty()
   @IsString()
   @Matches(CURP_REGEX, {
     message: 'El CURP debe tener un formato válido.'
   })
   @Length(18, 18, {
     message: 'El CURP debe tener exactamente 18 caracteres.'
   })
   curp: string;

   @IsNotEmpty()
   @IsString()
   address: string;

   @IsNotEmpty()
   @IsNumber()
   monthlysalary: number;

}

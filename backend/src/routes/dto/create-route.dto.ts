import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRouteDto {
   @IsString()
   @IsNotEmpty()
   routeName: string;

   @IsString()
   @IsNotEmpty()
   problemDescription: string;

   @IsString()
   @IsNotEmpty()
   comments: string;

   @IsNumber()
   @IsNotEmpty()
   startLatitude: number;

   @IsNumber()
   @IsNotEmpty()
   startLongitude: number;

   @IsNumber()
   @IsNotEmpty()
   endLatitude: number;

   @IsNumber()
   @IsNotEmpty()
   endLongitude: number;

   @IsNumber()
   @IsNotEmpty()
   assignedHistoryId: number;
}

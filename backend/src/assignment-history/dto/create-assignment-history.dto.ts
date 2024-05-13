import { IsNotEmpty } from "class-validator";

export class CreateAssignmentHistoryDto {
    
    @IsNotEmpty()
    vehicleId: number;

    @IsNotEmpty()
    driverId: number;
}

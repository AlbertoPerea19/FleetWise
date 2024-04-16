import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import { Driver } from "src/drivers/entities/driver.entity";
import { IsNotEmpty } from "class-validator";

export class CreateAssignmentHistoryDto {
    @IsNotEmpty()
    vehicleId: number;
    @IsNotEmpty()
    driverId: number;
}

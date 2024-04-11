import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignmentHistoryDto } from './create-assignment-history.dto';
import { Driver } from 'src/drivers/entities/driver.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { IsBoolean, IsDate, IsNotEmpty } from 'class-validator';

export class UpdateAssignmentHistoryDto extends PartialType(CreateAssignmentHistoryDto) {
    vehicleId: number;
    driverId: number;
    fecha_asignacion: Date;
    estado: boolean;
    id: number;
}

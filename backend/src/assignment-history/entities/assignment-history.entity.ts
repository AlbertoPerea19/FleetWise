import { Expose } from "class-transformer";
import { IsBoolean, IsDate, IsOptional } from "class-validator";
import { Driver } from "src/drivers/entities/driver.entity";
import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import { Column, CreateDateColumn, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AssignmentHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne( () => Vehicle, vehicle => vehicle.id)
    @Expose({ name: "vehicleId" })
    public vehicleId: number;
    
    @ManyToOne( () => Driver, driver => driver.id)
    @Expose({ name: "driverId" })
    public driverId: number;

    @IsBoolean()
    @Column({default: true})
    estado: boolean;

    @IsDate()
    @Column()
    @IsOptional()
    @CreateDateColumn()
    fecha_asignacion: Date;

    
}

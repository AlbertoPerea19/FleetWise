import { Driver } from "src/drivers/entities/driver.entity";
import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import { Column, Entity, JoinColumn, ManyToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AssignmentHistory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    assignmentDate: Date;

    @Column({default: true})
    isActive: boolean;

    @Column()
    vehicleId: number;

    @Column()
    driverId: number;

    @ManyToOne(() => Vehicle, vehicle => vehicle.id, {cascade: true})
    @JoinColumn({name: 'vehicleId'})
    vehicle: Vehicle;

    @ManyToOne(() => Driver, driver => driver.id, {cascade: true})
    @JoinColumn({name: 'driverId'})
    driver: Driver;

}

import { User } from 'src/users/entities/user.entity';
import { Vehicle } from 'src/vehicles/entities/vehicle.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  routeDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: false })
  successful: boolean;

  @Column({ nullable: true })
  problemDescription: string;

  @Column({ nullable: true })
  comments: string;

  @Column()
  startLatitude: number;

  @Column()
  startLongitude: number;

  @Column()
  endLatitude: number;

  @Column()
  endLongitude: number;

  @ManyToOne(() => Vehicle, vehicle => vehicle.routes)
  vehicle: Vehicle;

  @ManyToOne(() => User, user => user.routes)
  assignedUser: User;
}

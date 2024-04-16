import { AssignmentHistory } from "src/assignment-history/entities/assignment-history.entity";
import { Vehicle } from "src/vehicles/entities/vehicle.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('driver')
export class Driver {
      @PrimaryGeneratedColumn()
      id: number;

      @Column({ nullable: false })
      firstName: string;

      @Column({ nullable: false })
      lastName: string;

      @Column({ nullable: false })
      birthDate: Date;

      @Column({ nullable: false, unique: true})
      licenseNumber: number;

      @Column({ nullable: false, unique: true})
      CURP: string;

      @Column({ nullable: false })
      address: string;

      @Column({ nullable: false })
      salary: number;

      @Column({ nullable: false })
      entryDate: Date;

      @OneToMany(() => AssignmentHistory, assignmentHistory => assignmentHistory.id)
      public assignamentHistoriesId: number;
}
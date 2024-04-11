import { AssignmentHistory } from "src/assignment-history/entities/assignment-history.entity";
import { Driver } from "src/drivers/entities/driver.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   make: string;

   @Column()
   model: string;

   @Column({unique: true})
   VIN: string;

   @Column({unique: true})
   licensePlate: string;

   @Column()
   purchasedDate: Date;

   @Column()
   price: number;

   @Column({nullable: true})
   photoUrl: string;

   @Column()
   entryDate: Date;

   @OneToMany(() => AssignmentHistory, assignmentHistory => assignmentHistory.id)
   public assignamentHistoriesId: number;
}

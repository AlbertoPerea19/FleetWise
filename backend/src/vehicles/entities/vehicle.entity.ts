import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}

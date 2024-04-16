import { Route } from "src/routes/entities/route.entity";
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

   @OneToMany(() => Route, route => route.vehicle)
   routes: Route[];

}

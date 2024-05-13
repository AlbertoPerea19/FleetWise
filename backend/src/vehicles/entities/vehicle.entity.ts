import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   brand: string;

   @Column()
   model: string;

   @Column({unique: true})
   vin: string;

   @Column({unique: true})
   plate: string;

   @Column({type: 'date'})
   purchasedDate: Date;

   @Column({type: 'decimal'})
   cost: number;

   @Column({nullable: true})
   photoUrl: string;

   @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
   createdAt: Date;
}

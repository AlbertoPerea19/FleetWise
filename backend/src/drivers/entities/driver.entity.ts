import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('driver')
export class Driver {
      @PrimaryGeneratedColumn()
      id: number;

      @Column({ nullable: false })
      firstName: string;

      @Column({ nullable: false })
      lastName: string;

      @Column({ nullable: false, type: 'date'})
      birthDate: Date;

      @Column({ nullable: false, unique: true})
      licenseNumber: number;

      @Column({ nullable: false, unique: true})
      curp: string;

      @Column({ nullable: false })
      address: string;

      @Column({ nullable: false, type: 'decimal'})
      monthlysalary: number;

      @Column({ nullable: false, type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
      createdAt: Date;

}
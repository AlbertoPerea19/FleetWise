import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehiculo {
@PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Column({ type: 'int'})
  id_conductor: number;

  @Column({ type: 'varchar', length: 15 })
  marca: string;

  @Column({ type: 'varchar', length: 15 })
  modelo: string;

  @Column({ type: 'varchar', length: 15})
  vin: string;

  @Column({ type: 'varchar', length: 7})
  placa: string;

  @Column({type: 'date'})
  fecha_compra: Date;

  @Column({type: 'int'})
  costo: Number;

  @Column({type: 'varchar', length: 60})
  foto_url: string;

  @Column({type: 'date'})
  fecha_ingreso: Date;
}

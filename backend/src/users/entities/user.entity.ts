import { Column, Entity, DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;
}

import { Route } from 'src/routes/entities/route.entity';
import { Column, Entity, DeleteDateColumn,PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @OneToMany(() => Route, route => route.assignedUser)
    routes: Route[];
}

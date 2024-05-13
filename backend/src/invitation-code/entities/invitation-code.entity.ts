import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

 
 @Entity()
 export class InvitationCode {
       @PrimaryGeneratedColumn()
       id: number;

       @Column({ unique: true, nullable: false})
       code: string;

       @Column({nullable: false})
       valid: boolean;

       @OneToOne(() => User, user => user.invitationCode)
       user: User;
 }

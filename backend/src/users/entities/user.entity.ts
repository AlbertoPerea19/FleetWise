import { InvitationCode } from 'src/invitation-code/entities/invitation-code.entity';
import { Column, Entity, DeleteDateColumn,PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @OneToOne(() => InvitationCode, invitationCode => invitationCode.user)
    invitationCode: InvitationCode;

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 
 @Entity()
 export class InvitationCode {
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column({ unique: true, nullable: false})
        code: string;
    
        @Column({nullable: false})
        valid: boolean;
 }

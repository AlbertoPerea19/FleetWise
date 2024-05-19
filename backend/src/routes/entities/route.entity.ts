import { AssignmentHistory } from 'src/assignment-history/entities/assignment-history.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';


@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  routeName: string;

  @Column({default: true}) 
  isActive: boolean;
  
  @Column({ nullable: true })
  problemDescription: string;

  @Column({ nullable: true })
  comments: string;

  @Column({type: 'decimal'})
  startLatitude: number;

  @Column({type: 'decimal'})
  startLongitude: number;

  @Column({type: 'decimal'})
  endLatitude: number;

  @Column({type: 'decimal'})
  endLongitude: number;

  @Column()
  assignedHistoryId: number;

  @ManyToOne(() => AssignmentHistory, assignmentHistory => assignmentHistory.id, {cascade: true})
  @JoinColumn({name: 'assignedHistoryId'})
   assigmentHistory: AssignmentHistory;

}

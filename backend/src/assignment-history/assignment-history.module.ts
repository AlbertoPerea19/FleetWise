import { Module } from '@nestjs/common';
import { AssignmentHistoryService } from './assignment-history.service';
import { AssignmentHistoryController } from './assignment-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentHistory } from './entities/assignment-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssignmentHistory]),
  ],
  controllers: [AssignmentHistoryController],
  providers: [AssignmentHistoryService],
})
export class AssignmentHistoryModule {}

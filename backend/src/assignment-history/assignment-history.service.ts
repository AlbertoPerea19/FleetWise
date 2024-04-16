import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssignmentHistoryDto } from './dto/create-assignment-history.dto';
import { UpdateAssignmentHistoryDto } from './dto/update-assignment-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentHistory } from './entities/assignment-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentHistoryService {

  constructor(@InjectRepository(AssignmentHistory)
  private assignmentHistoryRepository: Repository<AssignmentHistory>,) {}
  
  async create(createAssignmentHistoryDto: CreateAssignmentHistoryDto) {
    return await this.assignmentHistoryRepository.save(createAssignmentHistoryDto);
  }

  async findAll(): Promise<AssignmentHistory[]> {
    return await this.assignmentHistoryRepository.find();
  }

  findOne(id: number): Promise<AssignmentHistory>{
    return this.assignmentHistoryRepository.findOneBy({id});
  }

  update(id: number, updateDriverDto: AssignmentHistory) {
    return this.assignmentHistoryRepository.update(id, updateDriverDto);
  }

  async remove(id: number): Promise<void> {
    await this.assignmentHistoryRepository.delete(id);
  }
}

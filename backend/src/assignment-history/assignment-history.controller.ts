import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignmentHistoryService } from './assignment-history.service';
import { CreateAssignmentHistoryDto } from './dto/create-assignment-history.dto';
import { UpdateAssignmentHistoryDto } from './dto/update-assignment-history.dto';

@Controller('assignment-history')
export class AssignmentHistoryController {
  constructor(private readonly assignmentHistoryService: AssignmentHistoryService) {}

  @Post()
  create(@Body() createAssignmentHistoryDto: CreateAssignmentHistoryDto) {
    return this.assignmentHistoryService.create(createAssignmentHistoryDto);
  }

  @Get()
  findAll() {
    return this.assignmentHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentHistoryService.findOne(+id);
  }

  
  update(@Param('id') id: string, @Body() updateAssignmentHistoryDto: UpdateAssignmentHistoryDto) {
    return this.assignmentHistoryService.update(+id, updateAssignmentHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentHistoryService.remove(+id);
  }
}

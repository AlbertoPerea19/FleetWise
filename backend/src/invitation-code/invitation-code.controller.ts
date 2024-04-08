import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';
import { CreateInvitationCodeDto } from './dto/create-invitation-code.dto';
import { UpdateInvitationCodeDto } from './dto/update-invitation-code.dto';

@Controller('invitation-code')
export class InvitationCodeController {
  constructor(private readonly invitationCodeService: InvitationCodeService) {}

  @Post()
  create() {
    return this.invitationCodeService.create(); // Fix: Pass createInvitationCodeDto as an argument
  }

}

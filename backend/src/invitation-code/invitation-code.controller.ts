import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';

@Controller('invitation-code')
export class InvitationCodeController {
  constructor(private readonly invitationCodeService: InvitationCodeService) {}

  @Post()
  create() {
    return this.invitationCodeService.create(); // Fix: Pass createInvitationCodeDto as an argument
  }

}

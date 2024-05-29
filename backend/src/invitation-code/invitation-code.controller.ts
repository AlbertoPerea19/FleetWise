import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('invitation-code')
@UseInterceptors(LoggingInterceptor)
export class InvitationCodeController {
  constructor(private readonly invitationCodeService: InvitationCodeService) {}

  @Post()
  create() {
    return this.invitationCodeService.generateInvitationCode();
  }

}

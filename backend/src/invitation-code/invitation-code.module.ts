import { Module } from '@nestjs/common';
import { InvitationCodeService } from './invitation-code.service';
import { InvitationCodeController } from './invitation-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationCode } from './entities/invitation-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvitationCode])],
  controllers: [InvitationCodeController],
  providers: [InvitationCodeService],
  exports: [InvitationCodeService],
})
export class InvitationCodeModule {}

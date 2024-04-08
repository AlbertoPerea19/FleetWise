import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { InvitationCodeModule } from 'src/invitation-code/invitation-code.module';

@Module({
  imports: [UsersModule, InvitationCodeModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { InvitationCodeService } from 'src/invitation-code/invitation-code.service';

@Injectable()
export class AuthService {


    private readonly invitationCode: InvitationCodeService

    constructor(
        
        private readonly usersService: UsersService,
    ) {}

    async register(registerDTO: RegisterDto) {
        
        const isValidInvitationCode = await this.invitationCode.checkInvitationCode(registerDTO.codeInvitation);
        if (isValidInvitationCode === null || !isValidInvitationCode) {
            throw new Error('Invalid invitation code');
        }
        
        return this.usersService.create(registerDTO);
    }
}

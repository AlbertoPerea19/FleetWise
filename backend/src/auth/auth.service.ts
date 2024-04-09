import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { InvitationCodeService } from '../invitation-code/invitation-code.service'; 


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly invitationCodeService: InvitationCodeService
    ) {}

     

    async register(registerDTO: RegisterDto) {
        console.log(registerDTO.codeInvitation);
        const isValidInvitation = await this.invitationCodeService.checkInvitationCode(registerDTO.codeInvitation);
        console.log(isValidInvitation);

        if (!isValidInvitation) {
            throw new NotFoundException('Invalid invitation code');
        }
        
        return this.usersService.create(registerDTO);
    }
}

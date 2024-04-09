import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { InvitationCodeService } from '../invitation-code/invitation-code.service'; 
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly invitationCodeService: InvitationCodeService
    ) {}

     

    async register({email, password, codeInvitation}: RegisterDto) {
        const isValidInvitation = await this.invitationCodeService.checkInvitationCode(codeInvitation);

        if (!isValidInvitation) {
            throw new NotFoundException('Invalid invitation code');
        }

        this.invitationCodeService.invalidateCode(codeInvitation);
        return this.usersService.create({email, password: bcryptjs.hashSync(password, 10)});
    }
}

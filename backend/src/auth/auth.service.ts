import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { InvitationCodeService } from '../invitation-code/invitation-code.service'; 
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly invitationCodeService: InvitationCodeService,
        private readonly jwtService: JwtService
    ) {}

    async register({email, password, codeInvitation}: RegisterDto) {
        const isValidInvitation = await this.invitationCodeService.checkInvitationCode(codeInvitation);

        if (!isValidInvitation) {
            throw new NotFoundException('Invalid invitation code');
        }

        this.invitationCodeService.invalidateCode(codeInvitation);
        return this.usersService.create({email, password: bcryptjs.hashSync(password, 10)});
    }

    async login({email, password}: RegisterDto) {
        const user = await this.usersService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException('Email or password is incorrect');
        }

        if (!bcryptjs.compareSync(password, user.password)) {
            throw new NotFoundException('Email or password is incorrect');
        }

        const payload = {email: user.email};
        const token = this.jwtService.sign(payload);

        return {token,email};
    }


}

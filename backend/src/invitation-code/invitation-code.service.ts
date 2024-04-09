import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InvitationCode } from './entities/invitation-code.entity';

@Injectable()
export class InvitationCodeService {
  constructor( @InjectRepository(InvitationCode) private readonly invitationCodeRepository: Repository<InvitationCode>,){}

    async create(): Promise<string> {
      const codeLength = 12;
      const randomCode = crypto.randomBytes(codeLength).toString('hex');
      
      const invitationCode = new InvitationCode();
      invitationCode.code = randomCode;
      invitationCode.valid = true;
      await this.invitationCodeRepository.save(invitationCode);
      
      return randomCode;
    }

    async checkInvitationCode(codeInvitation: string): Promise<boolean>{
      const invitationCode = await this.invitationCodeRepository.findOne({ where: { code: codeInvitation } });
      if (invitationCode) {
        return true;
      } else {
        return false;
      }
      
    }
    
}

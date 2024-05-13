import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InvitationCode } from './entities/invitation-code.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class InvitationCodeService {
  constructor(
    @InjectRepository(InvitationCode)
    private invitationCodeRepository: Repository<InvitationCode>,
  ) {}

  async generateInvitationCode(): Promise<string> {
    const code = this.generateUniqueInvitationCode();
    const invitationCode = this.invitationCodeRepository.create({
      code,
      valid: true,
    });
    await this.invitationCodeRepository.save(invitationCode);
    return code;
  }

  async validateInvitationCode(code: string): Promise<boolean> {
    const invitationCode = await this.invitationCodeRepository.findOne({
      where: { code },
    });
    return !!invitationCode && invitationCode.valid;
  }

  async invalidateCode(code: string): Promise<void> {
    await this.invitationCodeRepository.update({ code }, { valid: false });
  }

  private generateUniqueInvitationCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
}

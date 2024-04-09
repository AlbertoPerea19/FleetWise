import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    register(@Body() registerDTO: RegisterDto, ){
        return this.authService.register(registerDTO);
    }

    @Post('login')
    login(@Body() loginDTO: RegisterDto, ){
        return this.authService.login(loginDTO);
    }

}

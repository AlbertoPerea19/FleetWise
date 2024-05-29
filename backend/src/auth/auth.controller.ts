import { Body, Controller, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('auth')
@UseInterceptors(LoggingInterceptor)
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('register')
    register(@Body() registerDTO: RegisterDto, ){
        return this.authService.register(registerDTO);
    }

    @Post('login')
    login(@Body() loginDTO: LoginDto, ){
        return this.authService.login(loginDTO);
    }

}

import { TransformInstanceToInstance } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    @MaxLength(20)
    @IsNotEmpty()
    password: string;
}

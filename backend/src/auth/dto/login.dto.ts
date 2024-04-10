import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { Entity } from "typeorm";

export class LoginDto{
    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(12)
    password: string;
}
import { IsEmail, IsNotEmpty, IsString, Matches, Min, IsInt } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name : string;
    @IsString()
    @IsNotEmpty()
    @Matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
        {
            message : `Password should contain one number, one special character, one uppercase and one lowercase`,
        }
    )
    password : string;
    @IsEmail()
    @IsNotEmpty()
    email : string;
    @IsInt()
    @Min(0)
    age : number;
    @IsString()
    @IsNotEmpty()
    address : string;
    @IsString()
    @IsNotEmpty()
    @Matches(
        /^01[3-9]\d{8}$/,
        {
            message : `Invalid phone number`,
        }
    )
    phone : string;
}

import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateBookingDto {
    @IsString()
    "fullName": string;
    
    @IsNumber()
    "guestSize": number;

    @IsNumber()
    "phone": number;

    @IsNumber()
    "price": number;

    @IsString()
    "bookAt": string;
}

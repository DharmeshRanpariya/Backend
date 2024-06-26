import { IsNumber, IsString } from "class-validator";

export class CreateUserChoiceDto {
    @IsString()
    user: string;

    @IsString()
    location: string;

    @IsNumber()
    days: number;

    @IsNumber()
    people: number;

    @IsNumber()
    price: number;

    @IsString()
    discription: string
}

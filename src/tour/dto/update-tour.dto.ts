import {
  IsBoolean,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateTourDto {
  @IsString()
  title: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsNumber()
  distance: number;

  @IsNumber()
  price: number;

  @IsNumber()
  maxGroupSize: number;

  @IsString()
  desc: string;

  @IsString()
  photo: string;

}

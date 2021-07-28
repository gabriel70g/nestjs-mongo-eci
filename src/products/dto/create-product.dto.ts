import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator'

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;
  
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  stock: number;
  
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  image: string;
}

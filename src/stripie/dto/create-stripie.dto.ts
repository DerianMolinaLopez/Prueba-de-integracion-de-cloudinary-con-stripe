import { IsString, IsNumber, IsNotEmpty, IsPositive, IsOptional } from 'class-validator';

export class CreateStripieDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsOptional() // La imagen es opcional porque no es un campo primitivo
  image: Express.Multer.File; // Archivo de imagen manejado por multer
}
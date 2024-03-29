import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCardDto {
  @ApiProperty({
    type: String,
    description: 'Título do card',
    example: 'Lista de compras',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
    description: 'Descrição do card',
    example: 'Fazer compras no supermercado.',
  })
  @IsString()
  note: string;

  @ApiProperty({
    type: Boolean,
    description: 'Indica se o card é favorito',
    example: false,
    required: false,
    default: false,
  })
  @IsBoolean()
  isFavorite: boolean;

  @ApiProperty({
    type: String,
    description: 'Cor do card',
    example: 'white',
    default: 'white',
  })
  @IsString()
  @IsOptional()
  color: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateStripieDto } from './create-stripie.dto';

export class UpdateStripieDto extends PartialType(CreateStripieDto) {}

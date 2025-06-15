import { Injectable } from '@nestjs/common';
import { CreateStripieDto } from './dto/create-stripie.dto';
import { UpdateStripieDto } from './dto/update-stripie.dto';

@Injectable()
export class StripieService {
  create(createStripieDto: CreateStripieDto) {
    return 'This action adds a new stripie';
  }

  findAll() {
    return `This action returns all stripie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stripie`;
  }

  update(id: number, updateStripieDto: UpdateStripieDto) {
    return `This action updates a #${id} stripie`;
  }

  remove(id: number) {
    return `This action removes a #${id} stripie`;
  }
}

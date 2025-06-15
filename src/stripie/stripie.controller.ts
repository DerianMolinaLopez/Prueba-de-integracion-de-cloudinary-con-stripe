import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StripieService } from './stripie.service';
import { CreateStripieDto } from './dto/create-stripie.dto';
import { UpdateStripieDto } from './dto/update-stripie.dto';

@Controller('stripie')
export class StripieController {
  constructor(private readonly stripieService: StripieService) {}

  @Post()
  create(@Body() createStripieDto: CreateStripieDto) {
    return this.stripieService.create(createStripieDto);
  }

  @Get()
  findAll() {
    return this.stripieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stripieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStripieDto: UpdateStripieDto) {
    return this.stripieService.update(+id, updateStripieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stripieService.remove(+id);
  }
}

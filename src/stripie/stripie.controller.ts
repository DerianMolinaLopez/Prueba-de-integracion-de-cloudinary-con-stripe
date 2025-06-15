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


}

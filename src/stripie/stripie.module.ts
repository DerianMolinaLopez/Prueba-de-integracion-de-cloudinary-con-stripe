import { Module } from '@nestjs/common';
import { StripieService } from './stripie.service';
import { StripieController } from './stripie.controller';

@Module({
  controllers: [StripieController],
  providers: [StripieService],
})
export class StripieModule {}

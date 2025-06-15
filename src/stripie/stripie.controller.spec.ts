import { Test, TestingModule } from '@nestjs/testing';
import { StripieController } from './stripie.controller';
import { StripieService } from './stripie.service';

describe('StripieController', () => {
  let controller: StripieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StripieController],
      providers: [StripieService],
    }).compile();

    controller = module.get<StripieController>(StripieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

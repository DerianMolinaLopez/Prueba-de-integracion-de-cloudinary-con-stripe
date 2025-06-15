import { Test, TestingModule } from '@nestjs/testing';
import { StripieService } from './stripie.service';

describe('StripieService', () => {
  let service: StripieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StripieService],
    }).compile();

    service = module.get<StripieService>(StripieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

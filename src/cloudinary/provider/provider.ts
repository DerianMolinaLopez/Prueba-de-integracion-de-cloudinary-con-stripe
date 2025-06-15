import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as CloudinaryLib from 'cloudinary';
import { config } from 'process';

export const CloudinaryProvider: Provider = {
  provide: 'lib:cloudinary',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    CloudinaryLib.v2.config({
      cloud_name: configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
    });
    return CloudinaryLib.v2;
  },
};
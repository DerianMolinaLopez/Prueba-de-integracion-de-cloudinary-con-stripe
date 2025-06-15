import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { StripieModule } from './stripie/stripie.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CloudinaryModule, StripieModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [],
      cache: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

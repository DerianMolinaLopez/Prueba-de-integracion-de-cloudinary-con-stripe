import { Module } from '@nestjs/common';
import { StripieService } from './stripie.service';
import { StripieController } from './stripie.controller';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { StripeProvider } from './provider/stripie.provider';
@Module({
  imports: [
    CloudinaryModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [() => ({
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        STRIPE_API_VERSION: process.env.STRIPE_API_VERSION,
      })],
    })
  ],
  controllers: [StripieController,],
  providers: [StripieService, StripeProvider],
  exports: [StripieService, StripeProvider],
})
export class StripieModule {}

// filepath: /home/derianml/Documentos/cloudinary-pagos/cloudinary_stripie/src/stripie/stripie.provider.ts
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

export const StripeProvider: Provider = {
  provide: 'STRIPE_CLIENT',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): Stripe => {
    const stripeSecretKey = configService.get<string>('STRIPE_SECRET_KEY');
    if (!stripeSecretKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined in the configuration');
    }
    return new Stripe(stripeSecretKey, {
      apiVersion: '2025-05-28.basil',
      typescript: true,
    });
  },
};
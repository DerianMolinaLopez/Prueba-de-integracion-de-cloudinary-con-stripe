import { Inject, Injectable } from '@nestjs/common';
import { CreateStripieDto } from './dto/create-stripie.dto';
import { UpdateStripieDto } from './dto/update-stripie.dto';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CloudianryResponse } from 'src/cloudinary/interfaces/cloudinaryResponse.interfaces';
@Injectable()
export class StripieService {

  constructor(@Inject('STRIPE_CLIENT') private readonly stripe: Stripe,
              private readonly cloudinaryService: CloudinaryService){}
  async create(createStripieDto: CreateStripieDto): Promise<any> {
    // 1. Subir la imagen a Cloudinary
    const uploadedImage : CloudianryResponse = await this.cloudinaryService.uploadImage(createStripieDto.image);

    // 2. Crear el producto en Stripe con la URL de la imagen
    const product = await this.stripe.products.create({
      name: createStripieDto.name,
      description: createStripieDto.description,
      images: [uploadedImage.secure_url], // Usa la URL de Cloudinary cuando la sube al servidor
    });

    // 3. Crear el precio asociado al producto
    const price = await this.stripe.prices.create({
      unit_amount: createStripieDto.price * 100, // Stripe usa centavos
      currency: 'usd',
      product: product.id,
    });

    return { product, price };
  }
}

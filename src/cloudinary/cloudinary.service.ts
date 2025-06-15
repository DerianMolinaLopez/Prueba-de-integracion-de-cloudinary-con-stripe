import { Injectable, Inject } from '@nestjs/common';
import { v2 as Cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor(@Inject('lib:cloudinary') private readonly cloudinary) {}
  
  
  async uploadImage(file: Express.Multer.File): Promise<any> {
    const uploadStream = (): Promise<any> => {
      return new Promise((resolve, reject) => {
        const stream = this.cloudinary.uploader.upload_stream(
          { resource_type: 'image' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        Readable.from(file.buffer).pipe(stream);
      });
    };

    return await uploadStream();
  }
}
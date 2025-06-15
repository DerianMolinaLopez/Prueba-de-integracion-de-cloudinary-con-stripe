import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
    }
  )
  )
 @Post('upload')
 async uploadImage(@UploadedFile() file: Express.Multer.File): Promise<any> {
    return this.cloudinaryService.uploadImage(file);
  }
}

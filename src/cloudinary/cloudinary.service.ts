import { CloudinaryResponse } from '@/common/types';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import { promisify } from 'util';
@Injectable()
export class CloudinaryService {
  async uploadFile(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (!file) {
      throw new BadRequestException('File not found');
    }

    const upload = await cloudinary.uploader.upload(file.path, {
      resource_type: 'auto',
    });

    await promisify(fs.unlink)(`${process.cwd()}\\${file.path}`);

    return upload;
  }
}

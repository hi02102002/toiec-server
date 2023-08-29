import { CloudinaryResponse } from '@/common/types';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import * as path from 'path';
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

    const filePath = path.join(process.cwd(), file.path);

    await promisify(fs.unlink)(filePath);

    return upload;
  }
}

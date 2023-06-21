import { CloudinaryModule } from '@/cloudinary/cloudinary.module';
import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';

@Module({
  controllers: [UploadController],
  providers: [],
  imports: [CloudinaryModule],
})
export class UploadModule {}

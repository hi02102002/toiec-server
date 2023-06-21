import { JwtAuthGuard } from '@/auth/guards';
import { CloudinaryService } from '@/cloudinary/cloudinary.service';
import {
  Controller,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';

@Controller('upload')
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          const splited = file.originalname.split('.');
          const name = splited.slice(0, splited.length - 1).join('-');
          const fileExtName = splited[splited.length - 1];
          const newFileName = `${name}-${Date.now()}.${fileExtName}`;
          return callback(null, newFileName);
        },
      }),
      fileFilter(req, file, callback) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|mp3)$/)) {
          return callback(new Error('This type not support'), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    console.log(file);
    const url = await this.cloudinaryService.uploadFile(file);

    return res.status(200).json({
      message: 'File uploaded successfully',
      data: url,
    });
  }
}

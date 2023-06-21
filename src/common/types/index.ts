import { User } from '@prisma/client';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export interface IRequestWithUser extends Request {
  user: User;
}

export type CloudinaryResponse = UploadApiResponse | UploadApiErrorResponse;

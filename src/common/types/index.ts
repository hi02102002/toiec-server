import { PartType, User } from '@prisma/client';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export interface IRequestWithUser extends Request {
  user: User;
}

export type CloudinaryResponse = UploadApiResponse | UploadApiErrorResponse;

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type TChoice = {
  questionId: string;
  answerId: string;
  partType: PartType;
};

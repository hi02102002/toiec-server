import { Readable } from 'stream';

export const convertFileToBlob = (file: Express.Multer.File): Promise<Blob> => {
  return new Promise<Blob>((resolve, reject) => {
    const readableStream = new Readable();
    readableStream.push(file.buffer);
    readableStream.push(null);

    const blob = new Blob([readableStream.read()], { type: file.mimetype });
    if (blob) {
      resolve(blob);
    } else {
      reject(new Error('Failed to convert file to Blob.'));
    }
  });
};

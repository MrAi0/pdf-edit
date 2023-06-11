/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { FileUploadRepository } from '../repository/file-upload.repository';
import * as fs from 'fs';
import { join } from 'path';
import { Stream } from 'stream';

@Injectable()
export class FileUploadService {
  constructor(private readonly fileUploadRepository: FileUploadRepository) {}

  async loadFile(): Promise<Buffer | Stream> {
    const res = await this.fileUploadRepository.getFile('example.pdf');
    if (res) return Buffer.from(res.content);

    const filepath = join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '/upload-file-backend/src/res/example.pdf',
    );
    const stream = fs.createReadStream(filepath);
    return stream;
  }

  async saveFile(data: Buffer) {
    return await this.fileUploadRepository.saveFile(data);
  }
}

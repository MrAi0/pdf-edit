import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class FileUploadRepository {
  constructor(private prisma: PrismaService) {}

  async getFile(fileName: string) {
    return await this.prisma.file.findFirst({
      where: {
        fileName: fileName,
      },
    });
  }

  async saveFile(content: Buffer) {
    const resp = await this.prisma.file.upsert({
      create: {
        content: content,
        fileName: 'example.pdf',
      },
      update: {
        content: content,
      },
      where: {
        fileName: 'example.pdf',
      },
    });
    console.log(resp, 'REPSPSPPPP');
  }
}

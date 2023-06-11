import { Module } from '@nestjs/common';
import { FileUploadController } from './controller/file-upload.controller';
import { FileUploadService } from './service/file-upload.service';
import { FileUploadRepository } from './repository/file-upload.repository';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService, FileUploadRepository, PrismaService],
})
export class FileUploadModule {}

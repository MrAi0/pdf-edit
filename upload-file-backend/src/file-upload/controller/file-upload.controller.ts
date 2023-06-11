import {
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadService } from '../service/file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Stream } from 'stream';

@Controller('/file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Get()
  async loadFile(@Res() res) {
    const fileObject = await this.fileUploadService.loadFile();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=document.pdf');
    if (fileObject instanceof Buffer) res.end(fileObject);
    else if (fileObject instanceof Stream) fileObject.pipe(res);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    this.fileUploadService.saveFile(file.buffer);
  }
}

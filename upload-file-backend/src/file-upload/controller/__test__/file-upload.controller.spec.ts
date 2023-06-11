import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from '../file-upload.controller';
import { FileUploadService } from 'src/file-upload/service/file-upload.service';
describe('AppController', () => {
  let appController: FileUploadController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadController],
      providers: [FileUploadService],
    }).compile();

    appController = app.get<FileUploadController>(FileUploadController);
  });

  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});

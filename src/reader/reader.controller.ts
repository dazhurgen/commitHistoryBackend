import { Controller, Get, Post, Param } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { get } from 'http';

@Controller('reader')
export class ReaderController {
  constructor(private readerService: ReaderService) {}

  @Get('BackendBranches')
  getBackendBranches() {
    return this.readerService.getUserBackendBranches();
  }
  @Get('backendCommitsFromBranch/:branch')
  getBackendCommitsFromBranch(@Param('branch') branch) {
    return this.readerService.getBackendCommitsFromBranch(branch);
  }
}

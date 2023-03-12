import { Module } from '@nestjs/common';
import { ReaderController } from './reader.controller';
import { ReaderService } from './reader.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ReaderController],
  providers: [ReaderService],
  imports: [ConfigModule],
})
export class ReaderModule {}

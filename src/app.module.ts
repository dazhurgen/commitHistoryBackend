import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ReaderModule } from './reader/reader.module';

@Module({
  imports: [AuthModule, ReaderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

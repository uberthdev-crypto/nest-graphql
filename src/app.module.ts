import { Module } from '@nestjs/common';
import { AppController } from '@/src/app.controller';
import { AppService } from '@/src/app.service';
import { TagModule } from '@/src/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@/src/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

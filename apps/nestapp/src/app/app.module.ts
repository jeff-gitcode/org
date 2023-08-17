import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule, ConfigModule.forRoot(), SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

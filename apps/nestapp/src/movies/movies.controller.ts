import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { SearchService } from '../search/search.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly searchService: SearchService) { }

  @Post('search')
  async search(@Body() body) {
    return await this.searchService.search(body.data);
  }

  // @Post()
  // create(@Body() createMovieDto: CreateMovieDto) {
  //   return this.moviesService.create(createMovieDto);
  // }

  // @Get()
  // findAll() {
  //   return this.moviesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.moviesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
  //   return this.moviesService.update(+id, updateMovieDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moviesService.remove(+id);
  // }
}

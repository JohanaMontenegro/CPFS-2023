import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { PeliculasController } from './peliculas/peliculas.controller';
import { PeliculasService } from './peliculas/peliculas.service';

@Module({
  imports: [],
  controllers: [AppController, PeliculasController],
  providers: [AppService, PeliculasService],
})
export class AppModule {}

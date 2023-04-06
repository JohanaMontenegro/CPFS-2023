import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from 'src/pelicula';

@Controller('peliculas')
export class PeliculasController {
    constructor(private peliculasService: PeliculasService) { }

   @Get()
    public getPelicula(){
        return this.peliculasService.getPelicula();
    }

    @Get('id')
    public getPeliculaId(@Param('id') id): Pelicula {
        return this.peliculasService.getPeliculaId(parseInt(id));
    }


    @Post()
    create(@Body() pelicula: any): string {
        return this.peliculasService.agregarPelicula(pelicula);
    }

    @Delete(':id')
    public borrarPelicula(@Param('id') id: number): string {
        return this.peliculasService.borrarPelicula(id)
    }

    @Put(':id')
    public actualizarPelicula(@Body() pista: any, @Param('id') id: number): string {
        return this.peliculasService.actualizarPelicula(id, pista)

    }
}


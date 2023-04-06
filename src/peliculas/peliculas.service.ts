import { Injectable } from '@nestjs/common';
import *as fs from 'fs';
import { Pelicula } from 'src/pelicula';

@Injectable()
export class PeliculasService {


    public getPelicula(): Pelicula[] {
        return this.mostrarPelicula;
    }
    private mostrarPelicula: Pelicula[] = [];

    constructor() {
        this.cargarPeli();
    }
    private cargarPeli(): void {
        let archivo = fs.readFileSync('./src/peliculas/peliculas.csv','utf8');
        let datos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
        this.mostrarPelicula = [];
        for (let i = 0; i < datos.length; i++) {
            let pelicula = new Pelicula(parseInt(datos[i][0]), datos[i][1], (datos[i][2]), datos[i][3], datos[i][4], datos[i][5], parseInt(datos[i][6]),parseInt(datos[i][7]))
            this.mostrarPelicula.push(pelicula);
        }

    }
    public getPeliculaId(id: number): Pelicula {
        let resultado = this.mostrarPelicula.find(pelicula => pelicula.id == id);
        return resultado
    }
    public agregarPelicula(pelicula: any): string {
        let nuevaPeli = new Pelicula(pelicula.id, pelicula.titulo, pelicula.sinopsis, pelicula.genero, pelicula.actores, pelicula.imagen, pelicula.duracion, pelicula.lanzamiento)
        if (nuevaPeli.id != null && nuevaPeli.id != null && nuevaPeli.id != null && nuevaPeli.id != null && nuevaPeli.id != null && nuevaPeli.id != null && nuevaPeli.id != null) {
            this.mostrarPelicula.push(nuevaPeli)
            this.cargarArchivo(nuevaPeli)
            return "ok"
        } else {
            return "carga de datos incorrecta"
        }
    }
    private cargarArchivo(pelicula: Pelicula): void {
        fs.appendFileSync('./src/peliculas/peliculas.csv', `\n${pelicula.id},${pelicula.titulo},${pelicula.sinopsis},${pelicula.generos},${pelicula.actores},${pelicula.imagen},${pelicula.duracion},${pelicula.lanzamiento}`);
    }

    public borrarPelicula(posicion: number): string {
        let resultado = this.mostrarPelicula.filter((pelicula) => pelicula.id != posicion,);
        if (resultado.length != this.mostrarPelicula.length) {
            this.mostrarPelicula = resultado
            this.actualizarArchivo();
            return "ok"
        } else {
            return 'error 404 not found'
        }
    }
    public actualizarArchivo() {
        fs.writeFile('./src/peliculas/peliculas.csv', '', function () {
            console.log('actualizar')
        });

        this.mostrarPelicula.forEach((pelicula) => {
            fs.appendFileSync('./src/peliculas/peliculas.csv', `${pelicula.id},${pelicula.titulo},${pelicula.sinopsis},${pelicula.generos},${pelicula.actores},${pelicula.imagen},${pelicula.duracion},${pelicula.lanzamiento}`)
        })
    }
    public actualizarPelicula(id: number, nuevaPeli: any): string {
        let pelicula = new Pelicula(nuevaPeli.id, nuevaPeli.titulo, nuevaPeli.sinopsis, nuevaPeli.generos, nuevaPeli.actores, nuevaPeli.imagen, nuevaPeli.duracion, nuevaPeli.lanzamiento);
        if (pelicula.id != null && pelicula.titulo != null && pelicula.sinopsis != null && pelicula.generos != null && pelicula.actores != null && pelicula.imagen != null && pelicula.duracion != null && pelicula.lanzamiento != null) {
            let i = this.mostrarPelicula.findIndex((pelicula) => pelicula.id = id);
            if (i != -1) {
                this.mostrarPelicula[i] = pelicula;
                return 'ok';
            } else {
                return 'error 404';
            }
        } else {
            return 'parametro incorrecto'
        }

    }

}



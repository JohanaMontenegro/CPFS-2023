export class Pelicula {
    id: number;
    titulo: string;
    sinopsis: string;
    generos: string;
    actores: string;
    imagen: string;
    duracion: number;
    lanzamiento: number;
    constructor(id: number, titulo: string, sinopsis: string, actores: string, generos: string, imagen: string, duracion: number, lanzamiento: number) {
        this.id = id;
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.generos = generos;
        this.actores = actores;
        this.imagen = imagen;
        this.duracion = duracion;
        this.lanzamiento = lanzamiento;
    }
}
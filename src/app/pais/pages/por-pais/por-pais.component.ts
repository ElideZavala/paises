import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSuegerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSuegerencias = false;

    this.paisService.buscarPais(termino)
      .subscribe(paises => {
        console.log(this.paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    // TODO: crear sugerencias

    this.paisService.buscarPais(termino)
      //el nuevo arreglo se encargara de mostrar las sugerencias.
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5)),
      (err: any) => this.paisesSugeridos = [];
  }

  buscarSugeridos(termino: string) {
    this.buscar(termino);
  }
}

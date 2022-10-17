import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe(capital => {
        console.log(this.capitales);
        this.capitales = capital;

      }, (err) => {
        this.hayError = true;
        this.capitales = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}

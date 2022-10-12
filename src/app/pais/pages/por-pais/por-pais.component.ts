import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  @Input() paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;
  // paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(): void {

    this.paisService.buscarPais(this.termino)
      .subscribe(paises => {
        this.hayError = false;
        this.paises = paises;
        console.log(this.paises);

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }











}

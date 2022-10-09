import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  // placeholder: string = 'Buscar por país';
  // termino: string = `+52 ${this.placeholder}`;
  termino: string = '';

  constructor(private paisService: PaisService) { }

  // clearInput(): void {
  //   this.placeholder = '';
  // }

  buscar() {

    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        console.log(resp);
      });
  }


}

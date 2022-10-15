import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {

  // Realizar la Emision.
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // Se emitira cuando la persona deja de escribir.
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }



  buscar(): void {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    // Mandaremos el valor del input cada vez que la persona deje de escribir.
    this.debouncer.next(this.termino)
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dbouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.dbouncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.dbouncer.next(this.termino);
  }
}

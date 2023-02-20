import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesAutocomplete: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.paisesAutocomplete = [];
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe({
      next: (paises) => {
        this.paisesAutocomplete = paises.splice(0,5);
      },
      error: (err) => {
        this.hayError = true;
        this.paisesAutocomplete = [];
      },
    });
  }
}

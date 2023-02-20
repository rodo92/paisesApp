import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;    }`
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'oceania', 'europe'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  getClass(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activaRegion(region: string) {
    if(region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.hayError = false;
    this.paises = [];
    this.paisService.getPaisPorRegion(this.regionActiva).subscribe({
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
}

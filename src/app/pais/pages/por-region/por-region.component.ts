import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;    }`
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'oceania', 'europa'];
  regionActiva: string = '';

  getClass(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activaRegion(region: string) {
    this.regionActiva = region;
  }
}

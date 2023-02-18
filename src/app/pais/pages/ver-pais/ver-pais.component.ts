import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: Country;
  constructor(
    private activateRouter: ActivatedRoute, 
    private paisService: PaisService
    ) {}

  ngOnInit(): void {
    // this.activateRouter.params
    //   .subscribe( ({codigoPais}) => {
    //     this.paisService.getPaisPorCodigo(codigoPais).subscribe(pais => {
    //       console.log(pais)
    //     })
    //   });

    // rxjs
    this.activateRouter.params
    .pipe(
      switchMap(({codigoPais}) => this.paisService.getPaisPorCodigo(codigoPais)),
      tap(console.log)
    )
    .subscribe(pais => {
      this.pais = pais[0];
    })
  }

}

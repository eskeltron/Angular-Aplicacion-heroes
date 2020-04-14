import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:Heroe;
  @Input() indice:number;

  constructor(
    private _router:Router,
  ) { 
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.indice]);
  }

}

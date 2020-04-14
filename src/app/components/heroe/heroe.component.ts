import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent{

  heroe:Heroe;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) { 

    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe( params['id'] );
    });

  }

}

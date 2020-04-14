import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Heroe, HeroesService, MapHeroe } from '../../services/heroes.service';

@Component({
selector: 'app-heroes-search',
templateUrl: './heroes-search.component.html'
})
export class HeroesSearchComponent implements OnInit {

  MapHeroe:MapHeroe[];
  busqueda:string = "";
  
  constructor(  
    private _router:Router,
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
  ) { }
  
  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe( params => {
      this.busqueda = params['name'];
      this.MapHeroe = this._heroesService.getMapHeroes( this.busqueda );
    });
    
  }
  
  verHeroe( i:number ):void{
    this._router.navigate(['/heroe',i]);
  }
  

}
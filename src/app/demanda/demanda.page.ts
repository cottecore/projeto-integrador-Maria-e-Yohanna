import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.page.html',
  styleUrls: ['./demanda.page.scss'],
})
export class DemandaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  go(rota:string){
    window.location.href = rota;
  }  

}

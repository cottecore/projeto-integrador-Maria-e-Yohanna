import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-poste',
  templateUrl: './lista-poste.page.html',
  styleUrls: ['./lista-poste.page.scss'],
})
export class ListaPostePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }  

}

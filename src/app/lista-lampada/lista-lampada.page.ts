import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-lampada',
  templateUrl: './lista-lampada.page.html',
  styleUrls: ['./lista-lampada.page.scss'],
})
export class ListaLampadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }  


}


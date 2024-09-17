import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conjunto-grafico',
  templateUrl: './conjunto-grafico.page.html',
  styleUrls: ['./conjunto-grafico.page.scss'],
})
export class ConjuntoGraficoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  go(rota:string){
    window.location.href = rota;
  }  

}

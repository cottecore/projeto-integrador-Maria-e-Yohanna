import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperacao',
  templateUrl: './recuperacao.page.html',
  styleUrls: ['./recuperacao.page.scss'],
})
export class RecuperacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  } 

}

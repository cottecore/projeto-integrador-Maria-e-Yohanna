import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-email',
  templateUrl: './lista-email.page.html',
  styleUrls: ['./lista-email.page.scss'],
})
export class ListaEmailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }  

}

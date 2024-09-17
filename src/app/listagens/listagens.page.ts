import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagens',
  templateUrl: './listagens.page.html',
  styleUrls: ['./listagens.page.scss'],
})
export class ListagensPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(rota:string){
    window.location.href = rota;
  }  


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos',
  templateUrl: './termos.page.html',
  styleUrls: ['./termos.page.scss'],
})
export class TermosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  go(rota:string){
    window.location.href = rota;
  }  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacadconj',
  templateUrl: './listacadconj.page.html',
  styleUrls: ['./listacadconj.page.scss'],
})
export class ListacadconjPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  go(rota:string){
    window.location.href = rota;
  }  

}

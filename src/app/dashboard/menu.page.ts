import { Component, Input, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { TraducaoService } from '../service/traducao.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @Input("content-id") content_id:string = '';
  public texto:any = {};
  constructor(
    public requisicao_service:RequisicaoService,
    public traducao_service:TraducaoService
  ) {}
 
  ngOnInit() {
    this.requisicao_service.get({
      controller: 'home-listar'
    })
    .subscribe(
      (_res:any) => {
        this.texto = _res;
 
        
      }
    );
  }
  
  go(rota:string){
    window.location.href = rota;
  }
}

 // Array de objetos
 

 
 

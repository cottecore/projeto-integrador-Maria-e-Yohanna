import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { TraducaoService } from '../service/traducao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Array de objetos
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

}

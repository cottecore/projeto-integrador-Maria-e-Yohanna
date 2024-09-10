import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.page.html',
  styleUrls: ['./etapa2.page.scss'],
})
export class Etapa2Page implements OnInit {
  public texto:string = '';

  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  ngOnInit() {
    this.requisicao_service.get({
      controller:'etapa-listar',
      etapa:2
    })
    .subscribe(
      (_res:any) =>{
        this.texto = _res;
      }
    );
  }

}
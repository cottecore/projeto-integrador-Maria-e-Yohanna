import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from 'src/app/service/requisicao.service';

@Component({
  selector: 'app-etapa3',
  templateUrl: './etapa3.page.html',
  styleUrls: ['./etapa3.page.scss'],
})
export class Etapa3Page implements OnInit {
public texto:string = '';
  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  ngOnInit() {
    this.requisicao_service.get({
      controller:'etapa-listar',
      etapa:3
    })
    .subscribe(
      (_res:any) =>{
        this.texto = _res;
      }
    );
  }

}
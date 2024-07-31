import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-poste',
  templateUrl: './listar-poste.page.html',
  styleUrls: ['./listar-poste.page.scss'],
})
export class ListarPostePage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
  ) { }

  public postes:Array<any> = [];
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.requisicao_service.get({
      controller:'poste-listar'
    })
    .subscribe(
      (_res:any) => {
        this.postes = _res;
      }
    );
  }

  editar(id:number){
    this.router.navigateByUrl('/cadastro-poste/' + id);
  }
  
  excluir(id:number){
    this.requisicao_service.get({
      controller:'poste-excluir',
      id:id
    })
    .subscribe(() => {
      this.listar();
    })
  }

}

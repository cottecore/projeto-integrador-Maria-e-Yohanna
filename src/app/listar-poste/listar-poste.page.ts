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
  public isShowDeleteDialog:boolean = false;
  public alertButtons:Array<any> = [];
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
  

  //deu errado refazer
  excluir(id:number){
    this.isShowDeleteDialog = true;
  this.alertButtons = [{
    text: 'Não',
    role: 'cancel',
    handler: () => {
      this.isShowDeleteDialog = false;
    },
  },
  {
    text: 'Sim',
    role: 'confirm',
    handler: () => {
      this.requisicao_service.get({
        controller:'poste-excluir',
        id:id
      })
  
    .subscribe(() => {
      this.listar();
    }
  );
},

  }];
  

}

go(rota:string){
  window.location.href = rota;
}  

}


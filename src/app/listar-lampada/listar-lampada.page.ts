import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listar-lampada',
  templateUrl: './listar-lampada.page.html',
  styleUrls: ['./listar-lampada.page.scss'],
})
export class ListarLampadaPage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController

  ) { }


  public lampadas:Array<any> = [];
  ngOnInit() {
    this.listar();
  }

    async listar(){
    const loading = await this.loadingCtrl.create({
       message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'lampada-listar'
    })
    .subscribe(
      (_res:any) => {
        loading.dismiss();
        this.lampadas = _res;
      }
    );
  }

 

editar(id:number){
  this.router.navigateByUrl('/cadastro-lampada/' + id);
}

excluir(id:number){
  this.requisicao_service.get({
    controller:'lampada-excluir',
    id:id
  })
  .subscribe(() => {
    this.listar();
  })
}



}

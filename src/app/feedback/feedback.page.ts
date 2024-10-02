import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController

  ) { }

  public comentarios:Array<any> = [];
  public isShowDeleteDialog:boolean = false;
  public alertButtons:Array<any> = [];
  ngOnInit() {
    this.listar();
  }
  
  async listar(){
    const loading = await this.loadingCtrl.create({
       message: 'Carregando...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'comentario-get'
    })
    .subscribe((_res:any) => {
        loading.dismiss();
        this.comentarios = _res;
      });
  }

  

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
          controller:'comentario-excluir',
          id:id
        })
        .subscribe(() => {
          this.listar();
        })
        ;
      },
    }];
    
  }



  go(rota:string){
    window.location.href = rota;
  }  

}

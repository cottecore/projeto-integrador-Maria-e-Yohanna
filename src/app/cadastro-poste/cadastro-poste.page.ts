import { Component, OnInit } from '@angular/core';
import { RequisicaoService} from '../service/requisicao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-poste',
  templateUrl: './cadastro-poste.page.html',
  styleUrls: ['./cadastro-poste.page.scss'],
})
export class CadastroPostePage implements OnInit {
  public descricao:string = '';
  public unidade:string = '';
  public tipoPoste:Array<any> = [];
  public tipo_poste_id = 0;
  public id:number = 0;
  constructor(
    public rs:RequisicaoService,
    private activated_router:ActivatedRoute
  ) {
   
    this.activated_router.params
    .subscribe(
      (params:any)=> {
        if (params.id != undefined){
          this.id = params.id;
          if (this.id != 0){
          this.rs.get({
            controller:'poste-get',
            id:this.id
          })
          .subscribe(
            (_dados:any) => {
              this.descricao = _dados.descricao;
              this.unidade = _dados.unidadeconsumidora;
              this.tipo_poste_id = _dados.tipo;
            }
          );
        }
        }  
      }
    );
    }
     
  ngOnInit() {
    this.carregarTipoPoste();
  }

  salvar(){
    const fd = new FormData();
    fd.append('controller', 'poste');
    fd.append('id',String(this.id));
    fd.append('op', 'salvar');
    fd.append('descricao',this.descricao);
    fd.append('unidade',this.unidade);
    fd.append('tipoPoste',String(this.tipo_poste_id));

    this.rs.post(fd)
    .subscribe(
      () => {
        location.href = '/listar-poste';
      }
    );
  }

  go(rota:string){
    window.location.href = rota;
  } 

  carregarTipoPoste()
  {
    this.rs.get({
      controller:'tipoposte-listar'
    })
    .subscribe((res:any) => {
      console.log(res);
      this.tipoPoste = res;
    });
  }
}
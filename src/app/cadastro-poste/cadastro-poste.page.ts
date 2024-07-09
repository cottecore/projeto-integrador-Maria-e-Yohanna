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
  public id:number = 0;
  constructor(
    public rs:RequisicaoService,
    private activated_router:ActivatedRoute
  ) {
   
    this.activated_router.params
    .subscribe(
      (params:any)=> {
        this.id = params.id;
        if (this.id != 0){
        this.rs.get({
          controller:'poste-get',
          id:this.id
        })
        .subscribe(
          (_dados:any) => {
            this.descricao = _dados.descricao;
          }
        );
      }
      }
    );
    }
     

  ngOnInit() {
  }


salvar(){
  const fd = new FormData();
  fd.append('controller', 'poste');
  fd.append('id',String(this.id));
  fd.append('op', 'salvar');
  fd.append('id',String(this.id));
  fd.append('descricao',this.descricao);


  this.rs.post(fd)
  .subscribe(
    () => {
      location.href = '/listar-poste';
    }
  );
}

}
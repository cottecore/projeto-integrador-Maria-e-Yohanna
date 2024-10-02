import { Component, OnInit } from '@angular/core';
import { RequisicaoService} from '../service/requisicao.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-comentario',
  templateUrl: './cadastro-comentario.page.html',
  styleUrls: ['./cadastro-comentario.page.scss'],
})
export class CadastroComentarioPage implements OnInit {
  public descricao:string = '';
  constructor(
    public rs:RequisicaoService,
    private activated_router:ActivatedRoute
  ) {}

  ngOnInit() {
  }

  salvar(){
    const fd = new FormData();
    fd.append('controller', 'comentario');
    fd.append('op', 'salvar');
    fd.append('descricao',this.descricao);  
  
    this.rs.post(fd)
    .subscribe(
      () => {
        location.href = '/feedback';
      }
    );
  }
  

  go(rota:string){
    window.location.href = rota;
  }

}

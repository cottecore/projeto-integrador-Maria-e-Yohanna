import { Component, OnInit } from '@angular/core';
import { RequisicaoService} from '../service/requisicao.service';

@Component({
  selector: 'app-cadastro-lampada',
  templateUrl: './cadastro-lampada.page.html',
  styleUrls: ['./cadastro-lampada.page.scss'],
})
export class CadastroLampadaPage implements OnInit {
  public descricao:string = '';

  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit() {
  }


salvar(){
  const fd = new FormData();
  fd.append('controller', 'lampada');
  fd.append('op', 'salvar');
  fd.append('descricao',this.descricao);

  this.rs.post(fd)
  .subscribe();
}

}

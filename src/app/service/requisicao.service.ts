import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TraducaoService } from './traducao.service';


@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient,
    public traducao_service:TraducaoService
  ) { }

  get(dados:any) {
    dados ['idioma'] = this.traducao_service.getIdioma();
    return this.http.get('/requisicao', {
      params:dados
    });
  }
  
  post(formData:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.http.post('/requisicao', formData, httpOptions);
  }  
}


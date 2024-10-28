import { Injectable } from '@angular/core';
import {LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class TraducaoService {
 private idioma_default:string = 'pt_br';

  constructor( 
     public local_storage:LocalstorageService

  ) { }

  getIdioma(){
    let idioma_selecionado = this.local_storage.get('idioma');
    return idioma_selecionado == '' || idioma_selecionado == null ? this.idioma_default : idioma_selecionado;
  }
  setIdioma(idioma:string){
    this.local_storage.set('idioma',idioma);
  }

  traducao(texto:any){
    if (typeof texto === 'object'){
      return texto[this.getIdioma()];
    }else{
      return texto;
    }
  }
}

// função que vai servir dados para outros lugares e ela ta pronta para chamar a minha API
/*O service nada mais é do que um arquivo typescript que serve dados.*/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // trazendo o link da minha API que esta lá no meu arquivo enviroment
  private apiUrl = enviroment.API_URL

  // Fazendo a injeção de depêndencias dentro do meu constructor 
  // Esse HttpClient é a parte do angular que lida com HTTP 
  constructor(private http: HttpClient) { }

  // função para retornar os dados do card
  getCard(): Observable<any>{
    /**/ 
    return this.http.get<any>(this.apiUrl)

  }
}

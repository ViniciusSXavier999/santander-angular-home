import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

  // fazendo a injeção de depêndencia
  constructor(private service: CardsService){

  }
  

  /* Aqui eu to falando que no meu componente eu tenho uma forma de entrada de dados que segue a mesma 
  forma dos meus objetos */
  accountData: AccountDataModel = {
    name: "",
    // objeto account
    account: {
    agency: "696969",
    number: "11 95998-4853"
    },
    card: {
        limit: 0,
        number: "0000"
    }
  };

  ngOnInit(): void {
    /*aqui estou chamando os dados do meu método*/
    this.getAccountData()
  }

  // função que vai chamar o meu service.
  getAccountData(){
    // Para usar o observable é necessario se inscrever nele através do subscribe
    this.service.getCard().subscribe(data =>{
      this.accountData.name = data.name
      /* Basicamente estou atribuindo o valor do resultado que esta trazendo da api do data 
      pro meu objeto accountData */ 
      this.accountData.account.agency = data.account.agency
      this.accountData.account.number = data.account.number
      this.accountData.card.limit = data.card.limit
      this.accountData.card.number = data.card.number.split(" ")[3]
    })
  }

}

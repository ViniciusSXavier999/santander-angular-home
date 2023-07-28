import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  

  /* Aqui eu to falando que no meu componente eu tenho uma forma de entrada de dados que segue a mesma 
  forma dos meus objetos */
  accountData: AccountDataModel = {
    name: "ISAEL PAI DE FAMILIA",
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
    throw new Error('Method not implemented.');
  }

}

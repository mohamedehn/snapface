import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //on déclare le type de  interval$  , on le déclare comme  Observable  qui émet des  number  en passant  number  entre chevrons <>
  interval$! : Observable<string> 
  
  ngOnInit(){
    this.interval$ = interval(1000).pipe( //pour appliquer des opérateurs à un Observable, on les passe, dans l'ordre, à une méthode = pipe()
      filter(value => value % 3 === 0), //filter() permet de filtrer les émissions, laissant passer uniquement celles qui nous intéressent
      map(value => value % 2 === 0 ? //map() qui permet de transformer les émissions d'un Observable
          `Je suis ${value} et je suis pair` :
          `Je suis ${value} et je suis impair`
          //L'opérateur modulo  %  divise un nombre par un autre et retourne le reste. 
        //Si un nombre entier modulo 2 est égal à 0, le nombre est pair ; sinon, il est impair.
      ),
      //un effet secondaire est une fonction qui fait quelque chose avec les émissions d'un Observable sans les modifier. 
      //Pour ajouter un effet secondaire à un Observable, on utilise l'opérateur tap()
      tap(text => this.logger(text))
  ); 
  }
  // méthode qui sera appelée par l'effet secondaire (tap()):
  logger(text: string): void {
    console.log(`Log: ${text}`);
}
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  // on passe le router comme argument du constructeur comme pour les services
  constructor(private router : Router){}

  //on créee une méthode qui servira a naviguer dans le router. Cette méthode sera appelé dans le bouton du template à l'aide de Click.
  onContinue() : void{
    this.router.navigateByUrl('facesnaps') // navigateByUrl permet de naviguer comme son nom l'indique, on précise ensuite la route à emprunter
  }
}

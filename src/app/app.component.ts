import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //déclaration d'une variable qui contient un tableau vide qui viendra stocker l'ensemble de nos faceSnaps avec ngOnInit ci-dessous
  faceSnaps! : FaceSnap[];
  
  // avec ngOnInit permet de stocker le code à exécuter lors de l'initialisation du composant. Ici ce sera un tableau d'objet
  ngOnInit(){
    this.faceSnaps = [
      {
        title: 'Archibald',
        description : 'Mon meilleur ami depuis tout petit!',
        imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createdDate: new Date(),
        snaps : 150,
        location : "Paris"
      },
      {
        title : 'Three Rock Mountain',
        description : 'Un endroit magnifique pour les randonnées.',
        imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1600px-Three_Rock_Mountain_Southern_Tor.jpg",
        createdDate : new Date(),
        snaps : 0,
        location : "la montagne"
      },
      {
        title : 'Un bon repas',
        description : "Mmmh c'est bon",
        imageUrl : "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
        createdDate : new Date(),
        snaps : 0
      },
    ]
  }
}

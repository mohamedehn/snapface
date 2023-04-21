//Les services permettent de centraliser les données et la logique pour les différents domaines de l'application.
//Créer un service est aussi simple qu'ajouter le décorateur  @Injectable()  à une classe.

import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

//Un service est une classe, on déclare donc une classe avec le décorateur  @Injectable() 
@Injectable({
    //providedin permet d'indiquer à Angular de mettre ce service à la racine du projet
  providedIn: 'root'
})
export class FaceSnapsService {
    //Les services n'ont pas de méthode ngOnInit(), car les services ne sont pas instanciés de la même manière que les components
  faceSnaps: FaceSnap[] = [
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
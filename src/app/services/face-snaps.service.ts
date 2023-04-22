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
          id : 1,
          title: 'Archibald',
          description : 'Mon meilleur ami depuis tout petit!',
          imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          createdDate: new Date(),
          snaps : 150,
          location : "Paris"
        },
        {
          id : 2,
          title : 'Three Rock Mountain',
          description : 'Un endroit magnifique pour les randonnées.',
          imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1600px-Three_Rock_Mountain_Southern_Tor.jpg",
          createdDate : new Date(),
          snaps : 0,
          location : "la montagne"
        },
        {
          id : 3,
          title : 'Un bon repas',
          description : "Mmmh c'est bon",
          imageUrl : "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
          createdDate : new Date(),
          snaps : 0
        },
      ];

      //Création d'une méthode qu'on appellera getAllFaceSnaps(). Cette méthode retournera, tous les FaceSnaps contenus dans le service.
      //En TS on stipule son type de retour : un tableau de FaceSnap []

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    };

      //Cette méthode retourne un FaceSnap si elle le trouve (d'où son type de retour), et throw une erreur dans le cas contraire.
      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      };

      // Cette méthode utilise  getFaceSnapById() pour récupérer le FaceSnap, et si le deuxième argument est 'snap', rajoute un snap ; 
      // sinon, elle enlève un snap. Pour limiter les possibilités à des options sémantiques, on utilise un literal type en précisant 'unsnap' aussi
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      };
};
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap! : FaceSnap
  myOtherSnap! : FaceSnap
  myLastSnap! : FaceSnap
  
  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit!',
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1600px-Three_Rock_Mountain_Southern_Tor.jpg",
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      "Mmmh c'est bon",
      "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",
      new Date(),
      0
    );
  }

}

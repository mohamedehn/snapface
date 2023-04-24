import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap! : FaceSnap;

  buttonText!:string;

  //on injecte ci-dessous notre face-snap model afin d'utiliser la méthode snapFaceSnapById
  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) {} //de récupérer les informations de la route activée avec ActivatedRoute

  ngOnInit() { 
    this.buttonText = 'Oh Snap!';
    // va permettre de récupérer le paramètre 'id'. Le + permet de transformer une string contenant des nombres en number (cast)
    const faceSnapId = +this.route.snapshot.params['id']; //un snapshot est un aperçu instantané d'une valeur qui change au cours du temps
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  //OnSnap permet de modifier le buttonText en fonction de si l'on à snap ou unsnap en reprenant les méthodes snapFaceSnapById
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.buttonText = 'Oh Snap!';
    }
}
}


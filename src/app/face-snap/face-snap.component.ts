import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;

  buttonText!:string;

  //on injecte ci-dessous notre face-snap model afin d'utiliser la méthode snapFaceSnapById
  constructor(private faceSnapsService: FaceSnapsService,
              private router : Router) {}

  ngOnInit() { 
    this.buttonText = 'Oh Snap!'
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

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}

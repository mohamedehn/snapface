import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit{
  //déclaration d'une variable qui contient un tableau vide qui viendra stocker l'ensemble de nos faceSnaps avec ngOnInit ci-dessous
  faceSnaps! : FaceSnap[];

  //Pour pouvoir utiliser un service dans un component, il faut utiliser le système d'injection de dépendances (dependency injection ou DI)
  constructor(private faceSnapsService : FaceSnapsService){}

  // avec ngOnInit permet de stocker le code à exécuter lors de l'initialisation du composant.
  ngOnInit() : void{
    this.faceSnaps = this.faceSnapsService.faceSnaps
  }
}

// dans ce fichier nous allons un module de routing à l'application pour la transformer en SPA

import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

// const routes contiendra un tableau de toutes les routes de l'application. Path permettra de définir le chemin.
// ce tableau va lier les routes de votre application (les différentes URL) aux components correspondants.
const routes : Routes = [
    {path : 'facesnaps', component : FaceSnapListComponent}, //ici l'url des facesnaps
    {path: '', component : LandingPageComponent} // ici la string vide permet définir la landing-page sur l'url de base
];

//Pour enregistrer ces routes dans votre application, il faut les passer au routeur en passant un objet de configuration au décorateur  @NgModule() 
// de AppRoutingModule
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
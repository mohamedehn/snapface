// on déclare ici les propriétés à notre classe FaceSnapComponent afin d'avoir un modèle

export class FaceSnap{
    id! : number;
    title! : string;
    description! : string; 
    imageUrl! : string; 
    createdDate! : Date; 
    snaps! : number;
    location? : string;
}
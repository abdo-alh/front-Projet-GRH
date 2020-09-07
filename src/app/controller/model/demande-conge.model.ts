import { TypeConge } from './type-conge.model';

export class DemandeConge {
   id:number;
   employee:string;
   typeConge:TypeConge;
   dateDebut:Date;
   dateFin:Date;
   duree:number;
   horaire:string;
   raison:string;
   certificat:string;
   status:string;

   public constructor () {
       
   }
}

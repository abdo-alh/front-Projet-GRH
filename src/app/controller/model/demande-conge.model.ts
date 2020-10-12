import { CertificatFile } from './file';
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
   nomCertificat:string;
   status:string;
   //public certificatFile:CertificatFile = new CertificatFile();

   public constructor () {
       
   }
}

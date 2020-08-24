import { Employee } from './employee';
import { Stagiaire } from './stagiaire';
import { TypeAttestation } from './type-attestation';
export class AttestationStagiaire {

    id:Number;
    encadrant:Employee;
    stagiaire:Stagiaire;
    dateAttestation:Date;
    description:String;
    typeAttestation:TypeAttestation;

    public constructor(){
        
    }

}

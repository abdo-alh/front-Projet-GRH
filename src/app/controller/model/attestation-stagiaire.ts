import { Employee } from './employee';
import { Stagiaire } from './stagiaire';
import { TypeAttestation } from './type-attestation';
export class AttestationStagiaire {

    public id:number;
    encadrant:Employee;
    stagiaire:Stagiaire;
    dateAttestation:Date;
    description:String;
    typeAttestation:TypeAttestation;

    public constructor(){
        
    }

}

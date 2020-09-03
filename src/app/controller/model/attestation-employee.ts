import { Employee } from './employee';
import { TypeAttestation } from './type-attestation';
export class AttestationEmployee {

    public id:number;
    employee:Employee;
    manager:String;
    dateAttestation:Date;
    description:String;
    typeAttestation:TypeAttestation;

    public constructor(){

    }

}
/*private Long id;
	
    @ManyToOne
    private Employee employee;
    
    private String manager;
    
    private Date dateAttestation;
    
    private String description;
    
    @ManyToOne
    private TypeAttestation typeAttestation;*/
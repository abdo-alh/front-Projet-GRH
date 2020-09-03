import { Employee } from './employee';
import { EquipeItem } from './equipe-item';
export class Stage {

    public id:number;
    raison:String;
    etat:String;
    encadrent:Employee;
    equipeItems:EquipeItem[]=[];

    public constructor(){
        
    }

}

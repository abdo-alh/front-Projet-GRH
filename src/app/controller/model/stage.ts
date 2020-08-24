import { Employee } from './employee';
import { EquipeItem } from './equipe-item';
export class Stage {

    id:Number;
    raison:String;
    etat:String;
    encadrent:Employee;
    equipeItems:EquipeItem[];

    public constructor(){
        
    }

}

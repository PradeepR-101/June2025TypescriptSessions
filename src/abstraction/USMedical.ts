import { UNHC } from "./UNHC";
import { WHO } from "./Who";

export interface USMedical extends WHO, UNHC{

    min_fee: number; //no initialization - only declaration

    //only method declaration - no method body - abstrac methods
    //abstraction
    //can not create the object/instance of the interface
    physio(): void;
    cardio(): void;
    emergency(): void;

    //100% abstraction


}



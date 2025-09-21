import { IndianMedical } from "./IndianMedical";
import { Medical } from "./Medical";
import { UKMedical } from "./UKMedical";
import { USMedical } from "./USMedical";

export class MaxHospital extends Medical implements USMedical, UKMedical, IndianMedical{
    min_fee: number = 100;
    
    billing(): void {
        console.log('max -- billing');
    }
   
    //UNHC
    publishMedicalNews(): void {
        console.log('max -- publishMedicalNews');
    }
   
   //WHO
    covidVaccicantion(): void {
        console.log('max -- covid vaccination');
    }
    
    //common - implemetend only once...
    emergency(): void {
        console.log('max -- emergency');
    }
    
    //US
    physio(): void {
        console.log('max -- physio');
    }
    cardio(): void {
        console.log('max -- cardio');
    }

    //UK
    oncology(): void {
        console.log('max -- oncology');
    }
    pedia(): void {
        console.log('max -- pedia');
    }
    dental(): void {
        console.log('max -- dental');
    }

    //India
    gastro(): void {
        console.log('max -- gastro');
    }
    ent(): void {
        console.log('max -- ent');
    }

    //Max: individual:
    opt(): void{
        console.log('max -- opt');
    }


    //override:
    override research(): void{
        console.log('Max - research');
    }
    
}
import { IcriteriValoracions } from "../Interfaces/IcriterisValoracions";
import { Valoracio } from "./Valoracio";

export class criterisValoracions implements IcriteriValoracions {
    criteri?: string;
    valoracions: Valoracio[] = [];

    
    constructor(criteri:string){
        this.criteri = criteri;
    }
    
}
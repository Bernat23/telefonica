import { IValoracio } from "../Interfaces/IValoracio";

export class Valoracio implements IValoracio {
    nota: number;
    opinio: string;
    seleccionat: boolean;
    
    constructor(nota: number, opinio: string){
        this.nota = nota;
        this.opinio = opinio;
        this.seleccionat = false;
    }
    
}


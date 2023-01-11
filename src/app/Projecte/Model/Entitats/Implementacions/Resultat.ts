import { IResultat } from "../Interfaces/IResultat";

export class Resultat implements IResultat {
    criteri!: string;
    nota!: number;

    constructor(criteri:string) {
        this.criteri = criteri;
    }

}
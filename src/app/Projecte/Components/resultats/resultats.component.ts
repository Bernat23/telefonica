import { Component, OnInit } from '@angular/core';
import { criterisValoracions } from '../../Model/Entitats/Implementacions/criterisValoracions';
import { Resultat } from '../../Model/Entitats/Implementacions/Resultat';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  numeros !: number[];
  criteris !: [];
  resultat !: Resultat[];
  valoracions !: criterisValoracions[];
  mostrar : boolean = false;
  result !: number;

  constructor() {
   }

  ngOnInit(): void {
    this.resultat = [];
    const valoracions = localStorage.getItem('valoracions');
    if(valoracions) {
      this.valoracions = JSON.parse(valoracions);
    }
    this.numeros = this.agafarNumeros();
    const criteris = localStorage.getItem("criteris");
    if(criteris) {
      this.criteris = JSON.parse(criteris);
    }
    const resultat = localStorage.getItem("resultat");
    if(resultat) {
      this.resultat = JSON.parse(resultat);
    }
    else {
      if(criteris) {
        for(let i = 0; i < this.criteris.length; i++){
          this.resultat.push(new Resultat(this.criteris[i]));
        }
      }
    }
  }

  agafarNumeros(): number[] {
    let numeros: number[] = [];
    for(let i = 0; i < this.valoracions.length; i++){
      for(let j = 0; j < this.valoracions[i].valoracions.length; j++) {
        let trobat: boolean = false;
        for(let k = 0; k < numeros.length; k++) {
          if(numeros[k] == this.valoracions[i].valoracions[j].nota) {
            trobat = true;
          }
        }
        if(!trobat) {
          numeros.push(this.valoracions[i].valoracions[j].nota);
        }
      }
    }
    numeros.sort((a:number, b:number) => a - b);
    return numeros;
  }

  calcularPercentatge(nota:number, notaMaxima:number) : number {
    return nota / notaMaxima * 100;
  }

  seleccionat(nota: number, criteri: string):void {
    let votat: boolean = false;
    let i : number = 0;
    console.log(this.resultat);
    while(!votat && i < this.resultat.length) {
      if(criteri == this.resultat[i].criteri) {
        this.resultat[i].nota = nota;
      }
      i++;
    }
    this.comprovarSiTotesEstanCompletades();
    if(this.mostrar) {
      this.mostrarNotaMitjana();
    }
  }

  comprovarSiTotesEstanCompletades(): void{
    let noTotsComplets: boolean = true;
    for(let i = 0; i < this.resultat.length; i++){
      if(this.resultat[i].nota == undefined && noTotsComplets) {
        noTotsComplets = false;
      }
    }
    this.mostrar = noTotsComplets;
  }

  mostrarNotaMitjana(): void {
    this.result = this.calcularNotaMitjana();
  }

  calcularNotaMitjana(): number {
    let total: number = 0;
    let nota: number = 0;
    for(let i = 0; i < this.valoracions.length; i++){
      for(let j = 0; j < this.valoracions[i].valoracions.length; j++) {
        if(j-1 == this.valoracions[i].valoracions.length){
          total += this.valoracions[i].valoracions[j].nota;
        }
      }
    }
    for(let i = 0; i < this.resultat.length; i++){
      nota += this.resultat[i].nota;
    }
    return nota / total;
  }

}

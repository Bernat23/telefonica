import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { criterisValoracions } from '../../Model/Entitats/Implementacions/criterisValoracions';
import { validador } from '../criteris/Validador/Validador';
import { Valoracio } from '../../Model/Entitats/Implementacions/Valoracio';

@Component({
  selector: 'app-valoracions',
  templateUrl: './valoracions.component.html',
  styleUrls: ['./valoracions.component.css']
})
export class ValoracionsComponent implements OnInit {
  criteris: string[] = [];
  valoracions: criterisValoracions[] = [];
  formValoracio!: FormGroup;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    const criteris = localStorage.getItem('criteris');
    if(criteris) {
      this.criteris = JSON.parse(criteris);
    }
    const valoracions = localStorage.getItem('valoracions');
    if(valoracions) {
      this.valoracions = JSON.parse(valoracions);
    }
    this.inicialitzarValoracions();
    this.formValoracio = this.fb.group({
      criteri: new FormControl("", validador),
      nota: new FormControl("", [Validators.required ,Validators.pattern('[0-9]*')]),
      opinio: new FormControl("", validador)
    });
  }

  inicialitzarValoracions(): void {
    for(let i = 0; i < this.criteris.length; i++) {
      if(this.criteris[i] != null){
        let trobat: boolean = false;
        let j: number = 0;
        while(!trobat && j < this.valoracions.length){
          if(this.valoracions[j].criteri == this.criteris[i]){
            trobat = true;
          }
          j++;
        }
        if(!trobat) {
          this.valoracions.push(new criterisValoracions(this.criteris[i]));
        }
      }
    }
  }

  onSubmit(): void {
    let crit = this.formValoracio.get('criteri')?.value;
    let not = this.formValoracio.get('nota')?.value;
    let opi = this.formValoracio.get('opinio')?.value;
    for(let i = 0; i < this.valoracions.length; i++) {
      if(this.valoracions[i].criteri == crit && !this.comprovarValoracio(not, crit)) {
        this.valoracions[i].valoracions.push(new Valoracio(not, opi));
      }
    }
    console.log(this.valoracions);
    this.guardarValoracions();
  }

  guardarValoracions():void{
    localStorage.setItem("valoracions", JSON.stringify(this.valoracions));
  }

  comprovarValoracio(nota:number, criteri: string): boolean {
    let trobat: boolean= false;
    let i : number = 0;
    while(!trobat && i < this.valoracions.length) {
      if(this.valoracions[i].criteri == criteri) {
        let valoracions = this.valoracions[i].valoracions; 
        trobat = this.comprovarNota(valoracions, nota);
      }
      i++;
    }
    return trobat;
  }

  comprovarNota(valoracions:Valoracio[], nota: number): boolean {
    let trobat: boolean= false;
    let i : number = 0;
    while(!trobat && i < valoracions.length){
      if(valoracions[i].nota == nota){
        trobat = true;
        console.log("La nota ja existeix!");
        
      }
      i++;
    }
    return trobat;
  }
  
}


import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { validador } from './Validador/Validador';
import { criterisValoracions } from '../../Model/Entitats/Implementacions/criterisValoracions';

@Component({
  selector: 'app-criteris',
  templateUrl: './criteris.component.html',
  styleUrls: ['./criteris.component.css']
})
export class CriterisComponent implements OnInit {

  form!: FormGroup;
  formBorrar!: FormGroup;
  criteris: string[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      criteri: new FormControl("", validador)
    });
    const criteris = localStorage.getItem('criteris');
    if(criteris) {
      this.criteris = JSON.parse(criteris);
    }
    this.formBorrar = this.fb.group({
      criteri: new FormControl("",validador)
    })
  }

  onSubmit(): void {
    let crear : boolean = true;
    for(let i = 0; i < this.criteris.length; i++){
      if(this.form.get("criteri")?.value == this.criteris[i]) {
        crear = false;
      }
    }
    if(crear) {
      this.criteris.push(this.form.get("criteri")?.value);
      this.guardarCriteris();
    } else {
      console.log("El criteri ja existeix!");
    }
    
  }

  borrarCriteri():void{
    let criteri: string= this.formBorrar.get("criteri")?.value; 
    let i: number = 0;
    let trobat: boolean = false;
    while(i < this.criteris.length && !trobat){
      if(this.criteris[i] == criteri){
        this.criteris.splice(i,1);
        trobat = true;
      }
      i++;
    }
    if(!trobat){
      console.log("El criteri introduït no existeix")
    }
    this.guardarCriteris();
    this.borrarValoracio(criteri);
  }

  guardarCriteris():void {
    localStorage.setItem('criteris',JSON.stringify(this.criteris));
  }

  borrarValoracio(criteri: string): void {
    const valoracionsString = localStorage.getItem('valoracions');
    let valoracions;
    if(valoracionsString) {
      valoracions = JSON.parse(valoracionsString);
    }
    let i : number = 0;
    let trobat: boolean = false;
    while(i < valoracions.length && !trobat){
      if(valoracions[i].criteri == criteri){
        valoracions.splice(i, 1);
        trobat = true;
      }
      ++i;
    }
    localStorage.setItem("valoracions", JSON.stringify(valoracions));
  }
}
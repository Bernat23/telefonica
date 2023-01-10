import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent implements OnInit {
  numeros !: number[];

  constructor() { }

  ngOnInit(): void {

  }

}

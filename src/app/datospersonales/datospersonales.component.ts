import { Component, OnInit, Input } from '@angular/core';
import { Datos } from '../interfaces/interfaces';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css'],
})
export class DatospersonalesComponent implements OnInit {
  constructor() {}
  @Input()
  data!: Datos;

  ngOnInit(): void {}
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string= 'ruben'
  nombreUpper: string= 'RUBEN'
  nombreCompleto: string= 'rUBen mOntEs'
  fecha:Date= new Date(); // Fecha de hoy


}

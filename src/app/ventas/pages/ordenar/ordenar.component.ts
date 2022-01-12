import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayuscula:boolean=true;
  ordenarPor:string ='';
  heroes:Heroe[]=[
    {
      nombre:'Super Man',
      vuela: true,
      color:Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color:Color.verde
    },
    {
      nombre:'Dardevil',
      vuela: false,
      color:Color.rojo
    },
    {
      nombre:'GreenLanter',
      vuela: true,
      color:Color.verde
    }   

  ]

  
  changeMayusculas(){
    this.enMayuscula= !this.enMayuscula;
  }

  cambiarOrden( valor: string){
    this.ordenarPor= valor;
    console.log(valor);
    
  }

}

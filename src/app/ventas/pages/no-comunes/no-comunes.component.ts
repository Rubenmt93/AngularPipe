import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  persona={
    nombre:'Susana',
    genero:'femenino'
  }  
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  cliente: string[]=['Maria','Esther','Tana','Juan','Ruben','Fermando']
  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos 1 cliente esperando',
    'other': ' tenemos  #  clientes esperando',
  }
  cambiarPersona(){
    if(this.persona.genero == 'femenino'){
      this.persona.nombre= 'Fernando'
      this.persona.genero='masculino'
    }else{
      this.persona.nombre= 'Susana'
      this.persona.genero='femenino'
    }
  }
  eliminarCliente(){
    this.cliente.pop()
  }
  //KeyValue Pipe
  humano={
    nombre: 'Ruben',
    edad: 28,
    direccion: 'Teror, El paraiso XD'
  }
  //JsonPipe
  heroes=[
    {
      nombre:'Super Man',
      vuela: true
    },
    {
      nombre:'Spider Man',
      vuela: true
    },
    {
      nombre:'Coder Man',
      vuela: false
    }
  ]
  //Async Pipe
  miObservable = interval(1000);
  
  valorPromesa = new Promise((resolve, rejects) => {
    setTimeout(()=>{
      resolve('Tenenmos data de promesa');
    },3500 );
  });
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  lenguajes: string[] = ['TypesScript','JavaScript','Java SE', 'C#','PHP'];
  listatemasTS: string[] = ['Manual de Typ','Los basicos'];
  listatemasJS: string[] =['Frameworks JavaScript','Estructura de datos'];
  
  habilitar:boolean = true;
  
  setHabilitar(): void{
    this.habilitar= (this.habilitar==true)? false: true;
  }
  constructor() { }

    

}

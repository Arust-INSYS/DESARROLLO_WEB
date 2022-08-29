import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }
  cards = [
    {
      nombre: 'RentCar',
      description: 'Empresa que se dedica a la renta te automóviles',
      direccion: 'Cuenca - Terminal terrestre',
      telefono:'0248752',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      nombre: 'Your Games',
      description: 'Empresa de videojuegos, se dedica a la compra y venta de videjuegos así como la creación de estos.',
      direccion: 'Cuenca -Parque Calderon',
      telefono:'0248752',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      nombre: 'BookStore',
      description: 'Está empresa se dedica a la comercialización de libros así como la creación de estos',
      direccion: 'Cuenca - San Blaz',
      telefono:'0248752',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      nombre: 'EcuPhone',
      description: 'Empresa que se dedica a la producción y comercializaciónde teléfonos celulares ',
      direccion: 'Cuenca - Control Sur',
      telefono:'0248752',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];

  ngOnInit(): void {
  }

}

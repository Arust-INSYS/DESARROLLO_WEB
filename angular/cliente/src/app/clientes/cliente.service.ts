import { Injectable } from '@angular/core';
import{CLIENTES} from './clientes.json';
import{Cliente} from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string ='http://localhost:8080/api/cliente';
  constructor(private http:HttpClient) { }
  getClientes(): Observable<Cliente[]>{
   // return of (CLIENTES);
   return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}

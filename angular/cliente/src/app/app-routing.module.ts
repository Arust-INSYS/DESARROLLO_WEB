import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ClientesComponent } from './clientes/cliente';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'proveedores', component: ProveedoresComponent},
  {path:'**', redirectTo:''},
];
export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

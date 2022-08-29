import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import{HttpClientModule}from '@angular/common/http';



@NgModule({
  
    declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,    ProductosComponent, ProveedoresComponent
    
  ],
  imports:[
    BrowserModule,
    HttpClientModule,
    appRoutingModule
  ],
  
 
  
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

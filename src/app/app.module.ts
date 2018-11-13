import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServicioService } from './servicios/servicio.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from './httpclient/http.client';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    HttpClient,
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

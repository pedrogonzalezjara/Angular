import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioService {

  private host: string = 'http://10.62.4.52:8189/cxf/Rest';
  private Indices: string = '/Indices';
  private header: any;


  constructor(private httpClient: HttpClient) {
    this.header = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','method' : 'GET'})
   }

  obtenerIndicesFinancieros() : Observable<any>{
    return this.httpClient.get(`${this.host}${this.Indices}${Rest.IndicesFinancieros}`,this.header);
  }
  
}

const Rest = {
  IndicesFinancieros : '/indicesfinancieros'
}

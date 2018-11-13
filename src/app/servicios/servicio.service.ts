import { Injectable } from '@angular/core';
import { HttpClient } from '../httpclient/http.client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioService {

  constructor(private httpClient: HttpClient) {
   }

  obtenerDatos(): Observable<any> {
    return this.httpClient.get('');
  }
}


import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpClient {

  options: RequestOptions;
  constructor(private http: Http) {
    this.options = this.createHeader();
  }

  /**
  * Este metodo asigna las cabeceras para las peticiones
  */

  createHeader() {

    const headers = new Headers();
    const options = new RequestOptions({
      'headers': headers
    });
    return options;
  }

  /**
  * Este metodo sobreescribe desde la clase HttpClient todas las peticiones GET
  * @param url  es la url desde donde se debe consumir el servicio
  */
  get(url) {
    return this.http.get(url, this.options);
    // return this.http.get(url);
  }
  /**
  * Este metodo sobreescribe desde la clase HttpClient todas las peticiones POST
  * @param url  es la url desde donde se debe consumir el servicio
  * @param data es un objeto que contiene los datos necesarios para hacer un POST
  */
  post(url, data) {
    return this.http.post(url, data, this.options);
    // return this.http.post(url, data);
  }

  /**
  * Este metodo sobreescribe desde la clase HttpClient todas las peticiones PATCH
  * @param url  es la url desde donde se debe consumir el servicio
  * @param data es un objeto que contiene los datos necesarios para hacer un PATCH
  */
  patch(url, data) {
    return this.http.patch(url, data, this.options);
    // return this.http.patch(url, data);
  }

}

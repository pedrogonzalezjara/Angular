import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private host: string;
  constructor(private httpClient: Http) {
    this.pruebaServicio();
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  pruebaServicio() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.httpClient.get(this.host, { headers: headers }).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}

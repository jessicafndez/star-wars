import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Starships } from '../interfaces/starships';

@Injectable()
export class StarshipService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http: Http) { }

  get(id: number): Observable<Starships> {
    let space = this.http
      .get(`${this.baseUrl}/`)
  }

}

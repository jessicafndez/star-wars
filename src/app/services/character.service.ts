import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Character } from '../interfaces/character';

@Injectable()
export class CharacterService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http: Http) { }

  getAll(): Observable<Character[]> {
    let characters = this.http
      .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
      .map(mapCharacters);
    return characters;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapCharacters(response: Response): Character[] {
  console.log(response.json().results);
  return response.json().results;
}



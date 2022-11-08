import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor(private http: HttpClient) { }

  public getJSON(jsonName: string): Observable<any> {
    return this.http.get('assets/' + jsonName + '.json');
  }
}

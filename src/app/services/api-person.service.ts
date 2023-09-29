import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {

  private pathApi = 'https://apipersonsdreamsstyle.azurewebsites.net';
  //private pathApi = 'https://rickandmortyapi.com/api/character/1,183';

  constructor(private http: HttpClient) {  }

  public getUsers() : Observable<any> {
    return this.http.get<any>(this.pathApi);
  }
}

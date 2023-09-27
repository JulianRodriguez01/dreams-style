import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {

  private pathApi = 'https://apipersonsdreamsstyle.azurewebsites.net';

  constructor(private http: HttpClient) {  }

  public getUsers() : Observable<any> {
    return this.http.get<any>(this.pathApi + '/api/User');
  }
}

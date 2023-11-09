import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {

  //private pathApi = 'https://apipersondreamstyle.azurewebsites.net/api/User/';
  private pathApi = 'https://localhost:7095/api/User/';

  constructor(private http: HttpClient) {  }

  public getUsers() : Observable<any> {
    return this.http.get<any>(this.pathApi + "user");
  }

  public registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.pathApi + 'add-user', userData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
}

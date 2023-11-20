import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiPantService {

  //private pathApi = 'https://apipersondreamstyle.azurewebsites.net/api/User/';
  private pathApi = 'https://localhost:7095/api/Pants/';

  constructor(private http: HttpClient, private router: Router) {}

  public addPant(pantData: any): Observable<any> {
    return this.http.post<any>(this.pathApi + 'add-pant', pantData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
}
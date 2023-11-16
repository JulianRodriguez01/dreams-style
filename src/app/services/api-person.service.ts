import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonService {

  //private pathApi = 'https://apipersondreamstyle.azurewebsites.net/api/User/';
  private pathApi = 'https://localhost:7095/api/User/';
  public IsAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

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

  public checkAuthentication(): void {
    if (!this.IsAuthenticated) {
      this.router.navigate(['/unauthorized']);
    }
  }

  public setAuthenticationTrue(): void {
    this.IsAuthenticated = true;
  }

  public setAuthenticationFalse(): void {
    this.IsAuthenticated = false;
  }


}

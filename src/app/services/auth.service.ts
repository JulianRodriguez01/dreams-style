import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private pathApi = 'http://backdreamstyle.somee.com/api/User/';

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {}

  public getUserEmail(email: any) : Observable<any> {
    return this.http.get<any>(this.pathApi + "user/email/" + email);
  }

  getUserInfoFromToken(token: string): any {
    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const userEmail = decodedToken['unique_name'];
      return { userEmail };
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

  public updateValueUser(userData: any): Observable<any> {
    return this.http.put<any>(this.pathApi + 'update-user', userData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
}

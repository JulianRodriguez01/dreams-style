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

  private pathApi = 'https://apipersondreamstyle.azurewebsites.net/api/User/user/';

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {}

  public getUserEmail(email: any) : Observable<any> {
    return this.http.get<any>(this.pathApi + "email/" + email);
  }

  getUserInfoFromToken(token: string): any {
    try {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const userEmail = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      return { userEmail };
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
}

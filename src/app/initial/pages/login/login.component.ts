import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Response } from 'src/app/models/response';
import { Subscription, observeOn } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiPersonService } from '../../../services/api-person.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$: Subscription | undefined;
  loginError: boolean = false;

  constructor(
    private apiService: ApiPersonService,
    private authService: AuthService,
    formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.formLogin = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Login() {
    const usuarioLogin: Login = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    };
    this.http.post<Response>("https://localhost:7095/api/User/login", usuarioLogin, { observe: 'response' })
      .subscribe(
        (res: any) => {
          const token = res.body.token;
          if (token) {
            localStorage.setItem('token', token);
            console.log('TOKEN: ', token);

            const userInfo = this.authService.getUserInfoFromToken(token);
            if (userInfo) {
              console.log('Correo electrónico:', userInfo.userEmail);
            } else {
              console.error('No se pudo obtener la información del usuario desde el token.');
            }
            this.router.navigate(['user']);
            this.apiService.setAuthenticationTrue();
          } else {
            console.error('Error: Respuesta de API no contiene un token válido.');
          }
        },
        (err: any) => {
          console.error('Error en el login', err);
          this.loginError = true;
          this.apiService.setAuthenticationFalse();
        }
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
}

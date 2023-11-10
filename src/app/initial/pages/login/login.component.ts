import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Response } from 'src/app/models/response';
import { Subscription, observeOn } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiPersonService } from '../../../services/api-person.service';

/*import { DataService } from 'src/app/services/data.service';
import { SecurityService } from 'src/app/services/security.service';
import { ErrorStateMatcher1 } from '../error-state-matcher1';
import { environment } from 'src/environments/environment';*/

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
    console.log('Datos enviados al servidor:', usuarioLogin);
    this.http.post<Response>("https://localhost:7095/api/User/login", usuarioLogin, { observe: 'response' })
    .subscribe(res => {
      if (res.body) {
        const token = res.body.response;
        console.log('token', token);
        sessionStorage.setItem('token', token);
        this.router.navigate(['user']);
        this.apiService.setAuthenticationTrue();
      } else {
        console.log('Error: Respuesta de API no contiene un token válido.');
      }
    }, err => {
      console.log('Error en el login', err);
      this.loginError = true;
      this.apiService.setAuthenticationFalse();
    });    
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }
}

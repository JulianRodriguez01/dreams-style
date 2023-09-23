import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InitialComponent } from './initial.component';

import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { BtnNormalComponent } from './components/btn-normal/btn-normal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnGoogleComponent } from './components/btn-google/btn-google.component';
//import { InitialUserComponent } from './pages/initial-user/initial-user.component';

@NgModule({
  declarations: [
    InitialComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    NavbarComponent,
    IndexComponent,
    BtnLoginComponent,
    BtnNormalComponent,
    CarouselComponent,
    LoginComponent,
    BtnGoogleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class InitialModule { }

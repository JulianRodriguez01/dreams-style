import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ApiPersonService } from '../../app/services/api-person.service';

import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { IndexComponent } from './pages/index/index.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { BtnNormalComponent } from './components/btn-normal/btn-normal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnGoogleComponent } from './components/btn-google/btn-google.component';
import { LayoutInitialComponent } from './components/layout-initial/layout-initial.component';
import { HeaderInitialComponent } from './components/header-initial/header-initial.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { RecoveryAccountComponent } from './pages/recovery-account/recovery-account.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    HeaderComponentComponent,
    FooterComponentComponent,
    IndexComponent,
    BtnLoginComponent,
    BtnNormalComponent,
    CarouselComponent,
    LoginComponent,
    BtnGoogleComponent,
    LayoutInitialComponent,
    HeaderInitialComponent,
    RegisterUserComponent,
    RecoveryAccountComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    BtnNormalComponent,
    FooterComponentComponent,
  ],
  providers: [
    ApiPersonService,
  ]
})
export class InitialModule { }

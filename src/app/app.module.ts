import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { BtnNormalComponent } from './components/btn-normal/btn-normal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnGoogleComponent } from './components/btn-google/btn-google.component';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
//import { InitialUserComponent } from './pages/initial-user/initial-user.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

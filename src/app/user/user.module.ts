import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderUserComponent } from './components/header-user/header-user.component';
import { UserComponent } from './user.component';
import { InitialUserComponent } from './pages/initial-user/initial-user.component';


@NgModule({
  declarations: [
    HeaderUserComponent,
    UserComponent,
    InitialUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }

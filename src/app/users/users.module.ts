import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeaderUserComponent } from './components/header-user/header-user.component';
import { FooterUserComponent } from './components/footer-user/footer-user.component';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';


@NgModule({
  declarations: [
    HeaderUserComponent,
    FooterUserComponent,
    LayoutUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ]
})
export class UsersModule { }

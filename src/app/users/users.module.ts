import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InitialModule } from '../initial/initial.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { PantGenderComponent } from './pages/pant-gender/pant-gender.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent ,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'pant-gender', component: PantGenderComponent },
    ],
  },
  {
    path: 'user',
    component: LayoutUserComponent,
    children: [
      { path: '', redirectTo: 'profile-user', pathMatch: 'full' },
      { path: 'pant-gender', component: PantGenderComponent },
    ],
  }
];

@NgModule({
  declarations: [
    HeaderUserComponent,
    LayoutUserComponent,
    ProfileUserComponent,
    PantGenderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    InitialModule,
  ]
})
export class UsersModule { }

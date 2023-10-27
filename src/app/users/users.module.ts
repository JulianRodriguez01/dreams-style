import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InitialModule } from '../initial/initial.module';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { PantGenderComponent } from './pages/pant-gender/pant-gender.component';
import { PantSizeComponent } from './pages/pant-size/pant-size.component';
import { PantFabricComponent } from './pages/pant-fabric/pant-fabric.component';
import { PantPocketComponent } from './pages/pant-pocket/pant-pocket.component';
import { PantStikerComponent } from './pages/pant-stiker/pant-stiker.component';
import { PantCustomComponent } from './pages/pant-custom/pant-custom.component';


@NgModule({
  declarations: [
    HeaderUserComponent,
    LayoutUserComponent,
    ProfileUserComponent,
    PantGenderComponent,
    PantSizeComponent,
    PantFabricComponent,
    PantPocketComponent,
    PantStikerComponent,
    PantCustomComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    InitialModule,
  ]
})
export class UsersModule { }

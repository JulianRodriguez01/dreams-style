import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutInitialComponent } from './initial/components/layout-initial/layout-initial.component';
import { IndexComponent } from './initial/pages/index/index.component';
import { LoginComponent } from './initial/pages/login/login.component';
import { RecoveryAccountComponent } from './initial/pages/recovery-account/recovery-account.component';
import { RegisterUserComponent } from './initial/pages/register-user/register-user.component';

import { LayoutUserComponent } from './users/components/layout-user/layout-user.component';
import { ProfileUserComponent } from './users/pages/profile-user/profile-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutInitialComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'recovery', component: RecoveryAccountComponent },
      { path: 'register', component: RegisterUserComponent },
    ],
  },
  {
    path: 'user',
    component: LayoutUserComponent,
    children: [
      { path: '', redirectTo: 'profile-user', pathMatch: 'full' },
      { path: 'profile-user', component: ProfileUserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'recovery', component: RecoveryAccountComponent },
      { path: 'register', component: RegisterUserComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

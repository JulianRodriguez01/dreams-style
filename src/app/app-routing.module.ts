import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
import { LoginComponent } from './pages/login/login.component';
import { InitialUserComponent } from './user/pages/initial-user/initial-user.component';
*/
import { IndexComponent } from './initial/pages/index/index.component';
import { LoginComponent } from './initial/pages/login/login.component';

import { RecoveryAccountComponent } from './initial/pages/recovery-account/recovery-account.component';
import { RegisterUserComponent } from './initial/pages/register-user/register-user.component';

import { LayoutInitialComponent } from './initial/components/layout-initial/layout-initial.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutInitialComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'recovery', component: LoginComponent },
      { path: 'register', component: LoginComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

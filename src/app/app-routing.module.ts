import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialUserComponent } from './user/pages/initial-user/initial-user.component';
import { IndexComponent } from './initial/pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'initial-user', component: InitialUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

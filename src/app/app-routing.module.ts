import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialComponent } from './pages/initial/initial.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'index', component: InitialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

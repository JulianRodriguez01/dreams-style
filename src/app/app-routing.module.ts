import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutInitialComponent } from './initial/components/layout-initial/layout-initial.component';
import { IndexComponent } from './initial/pages/index/index.component';
import { LoginComponent } from './initial/pages/login/login.component';
import { RecoveryAccountComponent } from './initial/pages/recovery-account/recovery-account.component';
import { RegisterUserComponent } from './initial/pages/register-user/register-user.component';
import { CatalogComponent } from './initial/pages/catalog/catalog.component';

import { LayoutUserComponent } from './users/components/layout-user/layout-user.component';
import { ProfileUserComponent } from './users/pages/profile-user/profile-user.component';
import { PantGenderComponent } from './users/pages/pant-gender/pant-gender.component';
import { PantSizeComponent } from './users/pages/pant-size/pant-size.component';
import { PantFabricComponent } from './users/pages/pant-fabric/pant-fabric.component';
import { PantPocketComponent } from './users/pages/pant-pocket/pant-pocket.component';
import { PantStikerComponent } from './users/pages/pant-stiker/pant-stiker.component';

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
      { path: 'catalog', component: CatalogComponent },
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
      { path: 'pant-gender', component: PantGenderComponent },
      { path: 'pant-size', component: PantSizeComponent },
      { path: 'pant-fabric', component: PantFabricComponent },
      { path: 'pant-pocket', component: PantPocketComponent },
      { path: 'pant-stiker', component: PantStikerComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

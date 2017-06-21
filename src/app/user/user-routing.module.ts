import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/providers/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'user/detail', component: UserDetailComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule { }

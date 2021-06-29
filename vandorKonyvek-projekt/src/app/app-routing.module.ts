import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './components/auth/helpers/auth.guard';
import { RoleGuard } from './components/auth/helpers/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}, 
  { path: 'admin', 
    component: AdminComponent, 
    canActivate: [ AuthGuard,
                   RoleGuard
                  ], 
    data: { 
      expectedRole: 'admin'
    } 
  },
  { path: '**', redirectTo: '' },  
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard,
               RoleGuard,
               ],
})
export class AppRoutingModule { }

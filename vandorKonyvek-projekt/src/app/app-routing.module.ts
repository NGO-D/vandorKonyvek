import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './components/auth/helpers/auth.guard';
import { RoleGuard } from './components/auth/helpers/role.guard';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}, 
  { path: 'user', 
    component: UserComponent,
  },
  { path: 'user', 
    component: UserComponent,
    /* server oldal teszelése  
    canActivate: [ AuthGuard,
                   RoleGuard
                  ], 
    data: { 
      expectedRole: [ false || true ]
    } */
  },
  { path: 'admin', 
    component: AdminComponent, 
    /* szerver oldal tesztelése
    canActivate: [ AuthGuard,
                   RoleGuard
                  ], 
    data: { 
      expectedRole: true
    } */
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

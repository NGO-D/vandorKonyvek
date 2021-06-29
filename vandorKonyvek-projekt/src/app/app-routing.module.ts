import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './components/auth/helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}, 
 // { path: 'admin/books', component: BookListComponent},
 /* { path: 'admin', component: AdminLandingComponent, children: [
    { path: 'books/new', component: BookNewComponent},
    { path: 'books/:id', component: BookDetailsComponent}
  ]}, */
  { path: 'admin', 
  component: AdminComponent, 
  canActivate: [AuthGuard] 
},
    
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }

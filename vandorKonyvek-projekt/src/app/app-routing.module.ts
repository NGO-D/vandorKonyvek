import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdminLandingComponent} from './components/admin-component/admin-landing/admin-landing.component';
import { BookListComponent } from './components/admin-component/book-list/book-list.component';
import { BookDetailsComponent } from './components/admin-component/book-list/book-details/book-details.component';
import { BookNewComponent } from './components/admin-component/book-list/book-new/book-new.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}, 
 // { path: 'admin/books', component: BookListComponent},
 /* { path: 'admin', component: AdminLandingComponent, children: [
    { path: 'books/new', component: BookNewComponent},
    { path: 'books/:id', component: BookDetailsComponent}
  ]}, */
  { path: 'admin', component: AdminComponent },
    
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

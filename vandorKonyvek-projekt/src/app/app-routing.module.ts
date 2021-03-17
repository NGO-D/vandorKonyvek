import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockComponent } from './mock/mock.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { AdminLandingComponent} from './components/admin-component/admin-landing/admin-landing.component';
import { BookListComponent } from './components/admin-component/book-list/book-list.component';
import { BookDetailsComponent } from './components/admin-component/book-list/book-details/book-details.component';
import { BookNewComponent } from './components/admin-component/book-list/book-new/book-new.component';

const routes: Routes = [
  { path: 'mock', redirectTo: 'admin', pathMatch: 'full'},// only redirect is the full path is empty
  { path: 'admin/books', component: BookListComponent},
  { path: 'admin', component: AdminLandingComponent, children: [
    { path: 'books/new', component: BookNewComponent},
    { path: 'books/:id', component: BookDetailsComponent}
  ]},
  { path: 'admin/login', component: LoginComponent},   //nem lesz jó, hogy az adminon van
 
  { path: '', component: SignUpComponent}, 
]; 
   
 //, children: [
  //  { path: '', component: BookListComponent},
  //  { path: ':id', component: BookDetailsComponent},
  //  { path: ':id/edit', component: BookEditComponent},
  //  { path: 'new', component: BookNewComponent}
 // ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

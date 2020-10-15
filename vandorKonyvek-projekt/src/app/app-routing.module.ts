import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockComponent } from './mock/mock.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { AdminLandingComponent} from './components/admin-component/admin-landing/admin-landing.component';
import { BookListComponent } from './components/admin-component/books/book-list/book-list.component';
import { BookEditComponent } from './components/admin-component/books/book-edit/book-edit.component';
import { BookDetailsComponent } from './components/admin-component/books/book-details/book-details.component';
import { BookNewComponent } from './components/admin-component/books/book-new/book-new.component';

const routes: Routes = [
 { path: '', redirectTo: 'admin/home', pathMatch: 'full'}, // only redirect is the full path is empty
 { path: 'admin/login', component: LoginComponent},
 { path: 'admin/home', component: AdminLandingComponent},
 { path: 'admin/books', component: BookListComponent, children: [
   { path: ':id', component: BookDetailsComponent},
   { path: ':id/edit', component: BookEditComponent},
   { path: 'new', component: BookNewComponent}
 ]},
 //{ path: '', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

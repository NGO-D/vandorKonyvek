import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockComponent } from './mock/mock.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { AdminLandingComponent} from './components/admin-component/admin-landing/admin-landing.component';

const routes: Routes = [
 { path: 'mock', component: MockComponent },
 { path: 'admin/login', component: LoginComponent},
 { path: 'admin/signup', component: SignUpComponent},
 { path: 'admin/home', component: AdminLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

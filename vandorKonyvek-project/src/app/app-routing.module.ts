import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockComponent } from './mock/mock.component';


const routes: Routes = [
 { path: 'mock', component: MockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

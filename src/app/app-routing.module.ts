import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './page/hello/hello.component';
import { ContactComponent } from './page/contact/contact.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'contact', component: ContactComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

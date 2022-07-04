import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';

const routes: Routes = [
  {path:'auth',component:AuthComponent},
  {path:'',component:FormComponent},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

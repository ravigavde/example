import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'todo',
    component:ToDoComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'edit',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

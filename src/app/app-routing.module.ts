import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"showuser",component:ShowuserComponent
  },
  {
    path:"database",component:DatabaseComponent
  },
  {
    path:"",component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

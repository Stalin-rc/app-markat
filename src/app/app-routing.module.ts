import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';
import { RecoverCodeComponent } from './components/recover-code/recover-code.component';
import { RecoverPwComponent } from './components/recover-pw/recover-pw.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "landing",component:LandingComponent},
  {path: "login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: "recover-pw",component:RecoverPwComponent},
  {path: "recover-code",component:RecoverCodeComponent},
  {path: "reset-pw",component:ResetPwComponent},
  {path: "dashboard",component:DashboardComponent},

  {path: "**",component:LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

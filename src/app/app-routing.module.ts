import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';
import { RecoverCodeComponent } from './components/recover-code/recover-code.component';
import { RecoverPwComponent } from './components/recover-pw/recover-pw.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  {path: "landing",component:LandingComponent},
  {path: "login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: "recover-pw",component:RecoverPwComponent},
  {path: "recover-code",component:RecoverCodeComponent},
  {path: "reset-pw",component:ResetPwComponent},
  {path: "dashboard",component:DashboardComponent},
  {path: "dashboard/inventario",component:InventarioComponent},
  {path: "dashboard/clientes",component:ClientesComponent},
  {path: "dashboard/ventas",component:VentasComponent},
  {path: "dashboard/finanzas",component:FinanzasComponent},

  {path: "**",component:LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

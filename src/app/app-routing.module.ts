import { LoginGuard } from './login.guard';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {path: 'register', component: RegisterComponent},
   {path: 'login/failure', component: LoginComponent},
   {path: 'login', component: LoginComponent},
   {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
   {path: '**', component: LoginComponent },
   {path: '',  pathMatch: 'full', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

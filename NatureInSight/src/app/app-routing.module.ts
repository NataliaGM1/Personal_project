import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlantListComponent } from './pages/plant-list/plant-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { IllnessIndexComponent } from './pages/illness-index/illness-index.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'plant-list', component: PlantListComponent},
  {path: 'illness-index', component: IllnessIndexComponent},
  {path: 'details', component: DetailsComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main-page/home/home.component";
import {ListOfDoctorComponent} from "./doctors-page/list-of-doctor/list-of-doctor.component";
import {ListOfMedcenterComponent} from "./medcenter-page/list-of-medcenter/list-of-medcenter.component";
import {AboutUsComponent} from "./about-us-page/about-us/about-us.component";
import {AuthGuService} from "./auth-gu.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'doctors', loadChildren: () => import('./doctors-page/doctors-page.module').then(d => d.DoctorsPageModule), canActivate: [AuthGuService]},
  {path: 'medcenter', loadChildren: () => import('./medcenter-page/medcenter-page.module').then(m => m.MedcenterPageModule), canActivate: [AuthGuService]},
  {path: 'about', loadChildren: () => import('./about-us-page/about-us-page.module').then(a => a.AboutUsPageModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

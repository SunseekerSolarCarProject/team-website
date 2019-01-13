import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'team/:members', component: TeamComponent},
  { path: 'aboutus/:page', component: AboutusComponent},
  { path: 'carlist', component: CarlistComponent},
  { path: 'cardetail/:car', component: CardetailsComponent},
  { path: 'sponsors/:current', component: SponsorsComponent},
  { path: 'donate', component: DonateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

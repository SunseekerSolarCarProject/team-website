import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CardetailsComponent } from './pages/cardetails/cardetails.component';
import { CarlistComponent } from './pages/carlist/carlist.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HomeComponent } from './pages/home/home.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'team/:members', component: TeamComponent},
  { path: 'aboutus/:page', component: AboutusComponent},
  { path: 'carlist', component: CarlistComponent},
  { path: 'cardetail/:car', component: CardetailsComponent},
  { path: 'sponsors/:current', component: SponsorsComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

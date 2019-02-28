import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PersonComponent } from './person/person.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { DonateComponent } from './donate/donate.component';
import { DatabaseService } from './database.service';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TeamComponent,
    PersonComponent,
    AboutusComponent,
    CarlistComponent,
    CardetailsComponent,
    SponsorsComponent,
    DonateComponent,
    BlogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

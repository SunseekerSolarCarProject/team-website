import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgxAirtableModule } from 'ngx-airtable';
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
import { MemberdetailComponent } from './memberdetail/memberdetail.component';
import { AdoptComponent } from './adopt/adopt.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TeamComponent,
    PersonComponent,
    AboutusComponent,
    CarlistComponent,
    CardetailsComponent,
    SponsorsComponent,
    DonateComponent,
    BlogComponent,
    MemberdetailComponent,
    AdoptComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    NgxAirtableModule.forRoot({apiKey: 'keyWQOwc7ZNY12T0o'})
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

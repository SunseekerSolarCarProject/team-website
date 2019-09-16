import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './pages/team/team.component';
import { PersonComponent } from './components/person/person.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CarlistComponent } from './pages/carlist/carlist.component';
import { CardetailsComponent } from './pages/cardetails/cardetails.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { DonateComponent } from './pages/donate/donate.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { DatabaseService } from './services/database.service';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { HttpClientModule } from '@angular/common/http';



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
    BlogComponent,
    AdminComponent,
    ImageUploaderComponent,
    EditTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

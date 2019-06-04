import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {   MaterialModule  } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodsComponent } from './foods/foods.component';
import { RestrauntComponent } from './foods/restraunt/restraunt.component';
import { BarsComponent } from './foods/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortsActivityComponent } from './lifestyle/resorts-activity/resorts-activity.component';
import { BlogsComponent } from './lifestyle/blogs/blogs.component';
import { ExperiancesComponent } from './lifestyle/experiances/experiances.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingandCelebrationsComponent } from './weddingand-celebrations/weddingand-celebrations.component';
import { WeddingsComponent } from './WeddingandCelebrations/weddings/weddings.component';
import { CelebrationsComponent } from './WeddingandCelebrations/celebrations/celebrations.component';
import { MeetingAndConferencesComponent } from './meeting-and-conferences/meeting-and-conferences.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    AccomodationComponent,
    RoomsComponent,
    FoodsComponent,
    RestrauntComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortsActivityComponent,
    BlogsComponent,
    ExperiancesComponent,
    ExcursionsComponent,
    WeddingandCelebrationsComponent,
    WeddingsComponent,
    CelebrationsComponent,
    MeetingAndConferencesComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavtabsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

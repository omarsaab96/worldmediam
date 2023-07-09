import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';
import { IvyCarouselModule } from 'carousel-angular';
import { LightgalleryModule } from 'lightgallery/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubbannerComponent } from './subbanner/subbanner.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { VidphotoComponent } from './vidphoto/vidphoto.component';
import lightGallery from 'lightgallery';


@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ClientsComponent,
    ServicesComponent,
    CareersComponent,
    SponsorshipsComponent,
    SubbannerComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    OurworkComponent,
    VidphotoComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    LightgalleryModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'coming-soon', component: ComingSoonComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'sponsorships', component: SponsorshipsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'ourwork', component: OurworkComponent },
      { path: 'videography-and-photography', component: VidphotoComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
      { path: '', redirectTo: '/coming-soon', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

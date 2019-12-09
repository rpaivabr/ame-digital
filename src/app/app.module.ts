import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PartnerStoresComponent } from './components/partner-stores/partner-stores.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DownloadComponent } from './components/download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhoWeAreComponent,
    HowItWorksComponent,
    PartnerStoresComponent,
    MainPageComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

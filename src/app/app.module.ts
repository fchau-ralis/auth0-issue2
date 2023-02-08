import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Third Party Modules */
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AppRoutingModule } from './app-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/* Components */
import { AppComponent } from './app.component';
// Gaurds
import { AuthGaurd } from './auth.gaurd';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

import { CustomerService } from './services/customer/customer.service';
/* Services */

import { environment } from '../environments/environment';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { HelocFaqsComponent } from './pages/heloc-faqs/heloc-faqs.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    ErrorComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HelocFaqsComponent,
  ],
  imports: [
    CommonModule,
    AuthModule.forRoot({
      domain: `${environment.auth0_domain}`,
      clientId: `${environment.auth0_client_id}`,
      audience: `${environment.auth0_audience}`,
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-vii9a6ag.us.auth0.com/api/v2/' (note the asterisk)
            uri: `${environment.apiUrl}/*`,
            allowAnonymous: true,
          },
        ],
      },
    }),
    FormsModule,
    NgxSmartModalModule.forRoot(),
    BrowserModule.withServerTransition({
      appId: 'client',
    }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    { provide: APP_BASE_HREF, useValue: '/' },
    DatePipe,
    CustomerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
//
// ServiceWorkerModule.register('ngsw-worker.js', {
//     enabled: environment.production,
// }),

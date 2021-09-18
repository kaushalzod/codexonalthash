import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { CustomCardComponent } from './Shared/custom-card/custom-card.component';
import { HomepageComponent } from './website/pages/homepage/homepage.component';
import { WalletBotComponent } from './website/pages/wallet-bot/wallet-bot.component';
import { AlthashUniversityComponent } from './website/pages/althash-university/althash-university.component';
import { AboutComponent } from './website/pages/about/about.component';
import { NewsComponent } from './website/pages/news/news.component';
import { CommonPageLayoutComponent } from './website/pages/common-page-layout/common-page-layout.component';
import { OwlModule } from 'ngx-owl-carousel';
import { InvestmentpolicyComponent } from './website/pages/investmentpolicy/investmentpolicy.component';
import { TermOfUseComponent } from './website/pages/term-of-use/term-of-use.component';
import { DisclaimerComponent } from './website/pages/disclaimer/disclaimer.component';
import { LegalOpinionComponent } from './website/pages/legal-opinion/legal-opinion.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InternationalizationModule } from './internationalization/internationalization.module';
import { FAQComponent } from './website/pages/faq/faq.component';

/**
* The http loader factory : Loads the files from define path.
* @param {HttpClient} http
* @returns {TranslateHttpLoader}
* @constructor
*/
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustomCardComponent,
    HomepageComponent,
    WalletBotComponent,
    AlthashUniversityComponent,
    AboutComponent,
    NewsComponent,
    CommonPageLayoutComponent,
    InvestmentpolicyComponent,
    TermOfUseComponent,
    DisclaimerComponent,
    LegalOpinionComponent,
    FAQComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    AppRoutingModule,
    HttpClientModule,
    InternationalizationModule.forRoot({ locale_id: 'en-US' }), // iniating with default language: en-US
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

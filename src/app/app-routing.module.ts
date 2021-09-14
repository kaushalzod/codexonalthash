import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './website/pages/about/about.component';
import { AlthashUniversityComponent } from './website/pages/althash-university/althash-university.component';
import { CommonPageLayoutComponent } from './website/pages/common-page-layout/common-page-layout.component';
import { DisclaimerComponent } from './website/pages/disclaimer/disclaimer.component';
import { FAQComponent } from './website/pages/faq/faq.component';
import { HomepageComponent } from './website/pages/homepage/homepage.component';
import { InvestmentpolicyComponent } from './website/pages/investmentpolicy/investmentpolicy.component';
import { LegalOpinionComponent } from './website/pages/legal-opinion/legal-opinion.component';
import { NewsComponent } from './website/pages/news/news.component';
import { TermOfUseComponent } from './website/pages/term-of-use/term-of-use.component';
import { WalletBotComponent } from './website/pages/wallet-bot/wallet-bot.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'walletbot',
    component:WalletBotComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'althash-university',
    component:AlthashUniversityComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'privacy-policy',
    component:CommonPageLayoutComponent
  },
  {
    path:'faq',
    component:FAQComponent
  },
  {
    path:'disclaimer',
    component:DisclaimerComponent
  },
  {
    path:'investment-policy',
    component:InvestmentpolicyComponent
  },
  {
    path:'termofuse',
    component:TermOfUseComponent
  },
  {
    path:'legal-opinion',
    component:LegalOpinionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

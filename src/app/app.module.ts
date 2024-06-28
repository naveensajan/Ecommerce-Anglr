import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullComponent } from './layouts/full/full.component';
import { BnxFilterPipe } from './core/pipes/bnx-filter.pipe';
import { BnxProductcardComponent } from './widgets/molecule/bnx-productcard/bnx-productcard.component';
import { BnxNavbarComponent } from './shared/bnx-navbar/bnx-navbar.component';
import { BnxCartComponent } from './widgets/organism/bnx-cart/bnx-cart.component';
import { BnxCaroselComponent } from './widgets/molecule/bnx-carosel/bnx-carosel.component';
import { BnxFooterComponent } from './shared/bnx-footer/bnx-footer.component';
import { BnxServicefooterComponent } from './widgets/organism/bnx-servicefooter/bnx-servicefooter.component';
import { BnxDashboardComponent } from './widgets/organism/bnx-dashboard/bnx-dashboard.component';
import { BnxSignupComponent } from './widgets/organism/bnx-signup/bnx-signup.component';
import { BnxLoginComponent } from './widgets/organism/bnx-login/bnx-login.component';
import { BnxButtonComponent } from './widgets/atom/bnx-button/bnx-button.component';
import { BnxCategorycardComponent } from './widgets/atom/bnx-categorycard/bnx-categorycard.component';
import { BnxAfourcardComponent } from './widgets/atom/bnx-afourcard/bnx-afourcard.component';

@NgModule({
  declarations: [
    AppComponent,
    BnxProductcardComponent,
    BnxNavbarComponent,
    BnxCartComponent,
    BnxFilterPipe,
    FullComponent,
    BnxCaroselComponent,   
    BnxFooterComponent,
    BnxServicefooterComponent,
    BnxDashboardComponent,
    BnxSignupComponent,
    BnxLoginComponent,
    BnxButtonComponent,
    BnxCategorycardComponent,
    BnxAfourcardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { HelloComponent } from './components/hello/hello.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketsActionBarComponent } from './components/tickets/tickets-action-bar/tickets-action-bar.component';
import { TicketsScanComponent } from './components/tickets/tickets-scan/tickets-scan.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomersComponent,
    NotFoundComponent,
    LoginComponent,
    HelloComponent,
    TicketsComponent,
    TicketsActionBarComponent,
    TicketsScanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot(),
    FontAwesomeModule,
    NgxScannerQrcodeModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {

}

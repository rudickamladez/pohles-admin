import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ActionBarCustomersComponent } from './customers/action-bar-customers/action-bar-customers.component';
import { FormCreateCustomersComponent } from './customers/form-create-customers/form-create-customers.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, FontAwesomeModule, NgxScannerQrcodeModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, ActionBarCustomersComponent, FormCreateCustomersComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, ActionBarCustomersComponent]
})
export class ComponentsModule { }

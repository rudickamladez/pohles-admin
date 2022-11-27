import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class AdminLayoutModule {}

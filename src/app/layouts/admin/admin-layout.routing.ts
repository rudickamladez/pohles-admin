import { Routes } from "@angular/router";

import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";
import { TicketsComponent } from "src/app/components/tickets/tickets.component";
import { TicketsScanComponent } from "src/app/components/tickets/tickets-scan/tickets-scan.component";
import { ProfileComponent } from "src/app/components/profile/profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "tickets/scan", component: TicketsScanComponent },
  { path: "tickets", component: TicketsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "404", component: NotFoundComponent },
];

import { Routes } from "@angular/router";

import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { TicketsComponent } from "src/app/components/tickets/tickets.component";
import { TicketsScanComponent } from "src/app/components/tickets/tickets-scan/tickets-scan.component";
import { ProfileComponent } from "src/app/components/profile/profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "tickets/scan", component: TicketsScanComponent },
  { path: "tickets", component: TicketsComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "profile", component: ProfileComponent },
  { path: "404", component: NotFoundComponent },
];

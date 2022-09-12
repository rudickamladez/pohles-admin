import { Routes } from "@angular/router";

import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { CustomersComponent } from "src/app/components/customers/customers.component";
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { TicketsComponent } from "src/app/components/tickets/tickets.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "tickets", component: TicketsComponent },
  { path: "customers", component: CustomersComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "404", component: NotFoundComponent },
];

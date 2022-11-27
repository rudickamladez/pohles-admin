import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    class: ""
  },
  {
    path: "/tickets",
    title: "Tickets",
    icon: "tim-icons icon-money-coins",
    class: ""
  },
  {
    path: "/times",
    title: "Times",
    icon: "tim-icons icon-watch-time",
    class: ""
  },
  {
    path: "/years",
    title: "Years",
    icon: "tim-icons icon-calendar-60",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

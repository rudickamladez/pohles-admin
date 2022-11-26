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
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/tickets",
    title: "Tickets",
    icon: "icon-money-coins",
    class: ""
  },
  {
    path: "/times",
    title: "Times",
    icon: "icon-watch-time",
    class: ""
  },
  {
    path: "/years",
    title: "Years",
    icon: "icon-calendar-60",
    class: ""
  },
  {
    path: "/icons",
    title: "-Icons",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/notifications",
    title: "-Notifications",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/user",
    title: "-User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "-Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "-Typography",
    icon: "icon-align-center",
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

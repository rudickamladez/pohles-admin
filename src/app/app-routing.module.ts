import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./layouts/admin/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

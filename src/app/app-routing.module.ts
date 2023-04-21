import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { TemplateModule } from './template/template.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule)
  },
  {
    path: 'layouts',
    loadChildren: () => import('./layouts/layouts.module').then( m => m.LayoutsModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

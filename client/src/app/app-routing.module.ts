import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorsComponent } from './core/test-errors/test-errors.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'cell',
    canActivate: [AuthGuard],
    loadChildren: () => import('./cell/cell.module').then(mod => mod.CellModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'prisoner',
    canActivate: [AuthGuard],
    loadChildren: () => import('./inmate/inmate.module').then(mod => mod.InmateModule)
  },
  {
    path: 'security',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule)
  },
  {
    path: 'feedback',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feedback/feedback.module').then(mod => mod.FeedbackModule)
  },

  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

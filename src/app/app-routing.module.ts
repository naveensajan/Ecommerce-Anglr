import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { BnxDashboardComponent } from './widgets/organism/bnx-dashboard/bnx-dashboard.component';
import { BnxAuthGuard } from './core/guards/bnx-authguard';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: BnxDashboardComponent },


  {
    path: 'fullcomponent', component: FullComponent,
    // canActivate:[BnxAuthGuard] ,
    loadChildren: () => import('./layouts/full/full.module').then((m: typeof
      import('./layouts/full/full.module')) => m.FullModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BnxAuthGuard } from 'src/app/core/guards/bnx-authguard';
import { BnxNavbarComponent } from 'src/app/shared/bnx-navbar/bnx-navbar.component';
import { BnxProductcardComponent } from 'src/app/widgets/molecule/bnx-productcard/bnx-productcard.component';
import { BnxCartComponent } from 'src/app/widgets/organism/bnx-cart/bnx-cart.component';

const routes: Routes = [
  {path:'',component:BnxProductcardComponent},
  {path:'cart', component: BnxCartComponent},
  {path:'bnxnavbar',component:BnxNavbarComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullRoutingModule { }

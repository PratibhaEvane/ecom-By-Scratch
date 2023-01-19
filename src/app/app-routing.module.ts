import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [{
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path: 'seller-home',
   
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

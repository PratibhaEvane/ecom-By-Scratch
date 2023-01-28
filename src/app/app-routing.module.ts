import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomepageComponent } from './seller-homepage/seller-homepage.component';
import { SellerProductUpdateComponent } from './seller-product-update/seller-product-update.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
},
{
  path: 'seller',
  component: SellerAuthComponent
},
{
  path: 'seller-homepage',
  component: SellerHomepageComponent,
  canActivate: [AuthGuard]
},
{
  path: 'seller-add-product',
  component: SellerAddProductComponent,
  canActivate: [AuthGuard]
},
{
  path: 'seller-update-product/:id',
  component: SellerProductUpdateComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

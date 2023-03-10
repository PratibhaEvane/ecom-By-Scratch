import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomepageComponent } from './seller-homepage/seller-homepage.component';
import { SellerProductUpdateComponent } from './seller-product-update/seller-product-update.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
},
{
  path: 'seller-auth',
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
},
{
  path: 'search/:query',
  component: SearchPageComponent
},
{
  path: 'details/:productID',
  component: ProductDetailsComponent
},
{
  path: 'user-auth',
  component: UserAuthComponent
}, {
  path: 'user-home',
  component: UserHomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

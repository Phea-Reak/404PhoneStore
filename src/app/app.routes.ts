import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductDetail } from "./product-detail/product-detail";
import { Cart } from './cart/cart';


export const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'product-detail', component: ProductDetail},
{path: 'cart', component: Cart},


];

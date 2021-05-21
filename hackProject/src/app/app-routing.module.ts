import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import { StoreDisplayComponent } from './store-display/store-display.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'category/:category', component: CategoryComponent},
  {path: 'store/:email', component: StoreDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./modules/index-page/index-page.module').then(m=>m.IndexPageModule),
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: ()=> import('./modules/signup/signup.module').then(m=>m.SignupModule),
    pathMatch: 'full'
  },
  {
    path: 'signup/:usertype',
    loadChildren: ()=> import('./modules/signup/signup.module').then(m=>m.SignupModule),
    pathMatch: 'full'
  },
  {
    path:'links/:linkslug',
    loadChildren: ()=> import('./modules/customlink/customlink.module').then(m=>m.CustomlinkModule),
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: ()=> import('./modules/login/login.module').then(m=>m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'contactus',
    loadChildren: ()=> import('./modules/contact/contact.module').then(m=>m.ContactModule),
    pathMatch: 'full'
  },
  { 
    path: 'foodcategory', 
    loadChildren: () => import('./modules/foodcategory/foodcategory.module').then(m => m.FoodcategoryModule),
    pathMatch:'full'
   },
   { 
    path: 'foodcategory/:cat_slug', 
    loadChildren: () => import('./modules/food-list/food-list.module').then(m => m.FoodListModule),
    pathMatch:'full'
   },
   
  {
    path: 'foodcategory/:cat_slug/:dish_slug', 
    loadChildren: () => import('./modules/fooddetails/fooddetails.module').then(m => m.FooddetailsModule),
    pathMatch:'full'
  },
 
  {
     path: 'add-to-cart', 
     loadChildren: () => import('./modules/add-to-cart/add-to-cart.module').then(m => m.AddToCartModule) ,
     pathMatch:'full'
    },
  { 
    path: 'cookers-details/:hotel_slug', 
    loadChildren: () => import('./modules/cookers-details/cookers-details.module').then(m => m.CookersDetailsModule),
    pathMatch:'full'
  },
  {
    path: 'cookerdish/:hotel_slug/:dish_slug', 
    loadChildren: () => import('./modules/fooddetails/fooddetails.module').then(m => m.FooddetailsModule),
    pathMatch:'full'
  },
  { 
    path: 'individual-cooker-dishes', 
    loadChildren: () => import('./modules/individual-cooker-dishes/individual-cooker-dishes.module').then(m => m.IndividualCookerDishesModule) 
  },
  { 
    path: 'cookers-full-menu/:hotel_slug', 
    loadChildren: () => import('./modules/cookers-full-menu/cookers-full-menu.module').then(m => m.CookersFullMenuModule),
    pathMatch:'full'
  },
  
  // { 
  //   path: 'cookers-full-menu/:hotel_slug/:cat_slug', 
  //   loadChildren: () => import('./modules/cookers-full-menu/cookers-full-menu.module').then(m => m.CookersFullMenuModule),
  //   pathMatch:'full'
  // },
  { 
    path: 'cookers-full-menu/:hotel_slug/:cat_slug',
     loadChildren: () => import('./modules/cookers-foodcategory-dishes/cookers-foodcategory-dishes.module').then(m => m.CookersFoodcategoryDishesModule),
     pathMatch:'full'
    },
  {
    path: 'user-info-modules', 
    loadChildren: () => import('./modules/user-info-modules/user-info-modules.module').then(m => m.UserInfoModulesModule),
    pathMatch:'full'
  },
  { 
    path: 'user-info-modules/:username/:userId',
    loadChildren: () => import('./modules/user-details/user-details.module').then(m => m.UserDetailsModule),
    pathMatch:'full'
  },
  { 
    path: 'booking-list',
    loadChildren: () => import('./modules/booking-list/booking-list.module').then(m => m.BookingListModule),
    pathMatch:'full' 
  },
  { 
    path: 'booking-list/:booking_id', 
    loadChildren: () => import('./modules/bookinglist-details/bookinglist-details.module').then(m => m.BookinglistDetailsModule),
    pathMatch:'full' 
  },
  // { 
  //   path: 'cookers-details/:hotel_slug/:cooker_id', 
  //   loadChildren: () => import('./modules/cookers-details/cookers-details.module').then(m => m.CookersDetailsModule),
  //   pathMatch:'full'
  // },
  // {
  //   path: 'foodcategory/:cat_slug/:dish_slug/:title', 
  //   loadChildren: () => import('./modules/fooddetails/fooddetails.module').then(m => m.FooddetailsModule),
  //   pathMatch:'full'
  // },
   
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

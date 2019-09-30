import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash_screen', pathMatch: 'full' },
  { path: 'splash_screen', loadChildren: () => import('./splash_screen/splash_screen.module').then( m => m.SplashScreenModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'search-screen', loadChildren: './search-screen/search-screen.module#SearchScreenPageModule' },
  { path: 'thank-you-screen', loadChildren: './thank-you-screen/thank-you-screen.module#ThankYouScreenPageModule' },
  { path: 'main-screen', loadChildren: './main-screen/main-screen.module#MainScreenPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'landing',
    loadChildren: './pages/landing/landing.module#LandingPageModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    canActivate: [AuthGuard],
  },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule', canActivate: [AuthGuard] },
  { path: 'trees-map', loadChildren: './pages/trees-map/trees-map.module#TreesMapPageModule', },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

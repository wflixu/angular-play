import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/heroes/hero-detail/hero-detail.component';

import { ZorroPageComponent } from './pages/zorro-page/zorro-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'mylib',
    loadChildren: () =>import('./pages/mylib/mylib.module').then(m => m.MylibModule)
  },
  {
    path: 'tour',
    loadChildren: () =>
      import('./pages/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'ad',
    loadChildren: () => import('./pages/ad/ad.module').then(m => m.AdModule),
    data: { preload: false }
  },
  {
    path: 'web-com',
    loadChildren: () =>
      import('./pages/web-com/web-com.module').then(m => m.WebComModule),
    data: { preload: false }
  },
  {
    path: 'direct',
    loadChildren: () =>
      import('./pages/direct/direct.module').then(m => m.DirectModule),
    data: { preload: false }
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/myform/myform.module').then(m => m.MyformModule),
    data: { preload: false }
  },
  {
    path: 'life',
    loadChildren: () =>
      import('./pages/life/life.module').then(m => m.LifeModule),
    data: { preload: false }
  },
  {
    path: 'change',
    loadChildren: () =>
      import('./pages/change/change.module').then(m => m.ChangeModule),
    data: { preload: false }
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./pages/shop/shop.module').then(m => m.ShopModule),
    data: { preload: false }
  },

  { path: 'zorro', component: ZorroPageComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



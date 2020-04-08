import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { HerosListComponent } from './heros-list/heros-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HeroDetailInfoComponent } from './hero-detail-info/hero-detail-info.component';

const appRoutes: Routes = [
  {
    path: 'heros',
    component: HerosListComponent,
  },
  {
    path: '',
    redirectTo: '/heros',
    pathMatch: 'full',
  },
  {
    path: 'heros/:id',
    component: HeroDetailInfoComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    HerosListComponent,
    HelpComponent,
    HeroDetailInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

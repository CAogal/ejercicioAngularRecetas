import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-fav',
  templateUrl: './hero-fav.component.html',
  styleUrls: ['./hero-fav.component.scss'],
})
export class HeroFavComponent implements OnInit {
  heroFav;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroFav().subscribe((hero) => (this.heroFav = hero));
  }
}

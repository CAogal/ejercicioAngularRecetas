import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail-info',
  templateUrl: './hero-detail-info.component.html',
  styleUrls: ['./hero-detail-info.component.scss'],
})
export class HeroDetailInfoComponent implements OnInit {
  id: number;
  verFecha: boolean;
  heroSelected;

  isFav = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.verFecha =
      this.activatedRoute.snapshot.queryParams.verFecha === 'true';
    this.heroSelected = this.heroService.getOne(this.id);
    console.log(this.activatedRoute);
    this.heroService.getHeroFav().subscribe((hero) => {
      if (hero && hero.id === this.id) {
        this.isFav = true;
      } else {
        this.isFav = false;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroes } from '../heros-list/heros-list.component';

@Component({
  selector: 'app-hero-detail-info',
  templateUrl: './hero-detail-info.component.html',
  styleUrls: ['./hero-detail-info.component.scss'],
})
export class HeroDetailInfoComponent implements OnInit {
  id: number;
  verFecha: boolean;
  heroSelected;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.verFecha =
      this.activatedRoute.snapshot.queryParams.verFecha === 'true';
    this.heroSelected = heroes.find((hero) => hero.id === this.id);
    console.log(this.activatedRoute);
  }
}

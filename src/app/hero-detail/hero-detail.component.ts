import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() heroe;

  @Input() num: number;

  @Output() selectedHero = new EventEmitter();

  liked = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.selectedHero.emit(this.heroe);
  }

  like() {
    this.liked = true;
  }
}

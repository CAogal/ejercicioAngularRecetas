import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() name;

  @Output() nameChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  change() {
    this.name = 'cambiado';
    this.nameChange.emit(this.name);
  }
}

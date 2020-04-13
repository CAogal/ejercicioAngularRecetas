import { Component, OnInit, ViewChildren } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.scss'],
})
export class HerosListComponent implements OnInit {
  @ViewChildren(HeroDetailComponent)
  private childs;

  name = 'ejemplo';

  herosList = this.heroService.getAll();

  clima;
  temperatura;

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {
    const sub = this.heroService.getTiempo().subscribe((tiempo) => {
      console.log(tiempo);
      this.temperatura = tiempo.main.temp;
      this.clima = tiempo.weather[0].main;
    });
  }

  selected(hero) {
    console.log('seleccionado!', hero);
    this.router.navigate(['heros', hero.id], {
      queryParams: { verFecha: true },
    });
  }

  likeAll() {
    this.childs.forEach((element: HeroDetailComponent) => {
      element.like();
    });
  }
}

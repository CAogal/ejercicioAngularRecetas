import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFavComponent } from './hero-fav.component';

describe('HeroFavComponent', () => {
  let component: HeroFavComponent;
  let fixture: ComponentFixture<HeroFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

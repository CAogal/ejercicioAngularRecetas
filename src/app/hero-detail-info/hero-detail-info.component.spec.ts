import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailInfoComponent } from './hero-detail-info.component';

describe('HeroDetailInfoComponent', () => {
  let component: HeroDetailInfoComponent;
  let fixture: ComponentFixture<HeroDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes-form',
  templateUrl: './heroes-form.component.html',
  styleUrls: ['./heroes-form.component.scss'],
})
export class HeroesFormComponent implements OnInit {
  name = '';
  birth = '';

  error = false;

  form: FormGroup;
  constructor(private service: HeroService, private builder: FormBuilder) {}

  ngOnInit() {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthdate: '',
    });
  }

  create() {
    console.log(this.name);
    this.service.setHero({
      id: Math.random(),
      name: this.name,
      birthdate: this.birth,
    });

    this.name = '';
    this.birth = '';
  }

  preload() {
    //this.form.controls.name.patchValue('Pepito');
    //this.form.get('name').patchValue('pepito!');

    this.form.patchValue({
      name: 'pepito',
      birthdate: '2000-10-10',
    });
  }

  createReactiveForm() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.service.setHero({
        ...this.form.value,
        id: Math.random(),
      });

      this.form.reset();
    } else {
      this.error = true;
    }
  }
}

import { Component } from '@angular/core';
import { HeroItemComponent } from "../hero-item/hero-item.component";
import { Hero } from '../../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-list',
  imports: [HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss',
})
export class HeroListComponent {
  public heroes: Hero[] = [
    {
      id: 620,
      name: 'Spider-Man',
      powerstats: {
        intelligence: 90,
        strength: 55,
        speed: 67,
        durability: 75,
        power: 74,
        combat: 85,
      },
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
      soul: 'good',
    },
    {
      id: 637,
      name: 'Steppenwolf',
      powerstats: {
        intelligence: 94,
        strength: 100,
        speed: 83,
        durability: 100,
        power: 100,
        combat: 100,
      },
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/637-steppenwolf.jpg',
      soul: 'bad',
    },
    {
      id: 70,
      name: 'Batman',
      powerstats: {
        intelligence: 100,
        strength: 26,
        speed: 27,
        durability: 50,
        power: 47,
        combat: 100,
      },
      image:
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg',
      soul: 'good',
    },
  ];
}

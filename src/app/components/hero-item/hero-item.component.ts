import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.scss',
})
export class HeroItemComponent {
  hero = {
    id: 620,
    name: 'Spider-Man',
    powerstats: {
      intelligence: 90,
      strenght: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85,
    },
    image:
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/620-spider-man.jpg',
    alignment: 'good',
  };
}

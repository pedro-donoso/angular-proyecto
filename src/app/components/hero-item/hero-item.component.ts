import { Component } from '@angular/core';
import { Hero, PowerStat } from '../../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.scss',
})
export class HeroItemComponent {
  hero: Hero = {
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
  };

  isHeroVillain = this.hero.soul === 'bad';

  decrementPowerStat(powerstat: PowerStat):void{
    const value = this.hero.powerstats[powerstat];
    if(value > 0){
      this.hero.powerstats[powerstat]--;
    }
  }
  incrementPowerStat(powerstat: PowerStat):void{
    const value = this.hero.powerstats[powerstat];
    if(value < 100){
      this.hero.powerstats[powerstat]++;
    }
  }
}

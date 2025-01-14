import { Component, input } from '@angular/core';
import { Hero, PowerStat } from '../../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-item',
  imports: [],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.scss',
})
export class HeroItemComponent {
  hero = input.required<Hero>();

  isHeroVillain = false; //this.hero().soul === 'bad';

  decrementPowerStat(powerstat: PowerStat):void{
    const value = this.hero().powerstats[powerstat];
    if(value > 0){
      this.hero().powerstats[powerstat]--;
    }
  }
  incrementPowerStat(powerstat: PowerStat):void{
    const value = this.hero().powerstats[powerstat];
    if(value < 100){
      this.hero().powerstats[powerstat]++;
    }
  }
}

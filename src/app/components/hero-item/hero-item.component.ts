import { Component, computed, input, output } from '@angular/core';
import { Hero, PowerStat } from '../../../../shared/interfaces/hero.interface';
import { HeroPowerstatsChange } from '../../../../shared/interfaces/hero-powerstats-change.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-item',
  imports: [CommonModule],
  templateUrl: './hero-item.component.html',
  styleUrl: './hero-item.component.scss',
})
export class HeroItemComponent {
  hero = input.required<Hero>();

  powerstatsChange = output<HeroPowerstatsChange>();

  isHeroVillain = computed(() => this.hero().soul === 'bad');
powerstat: any;

  decrementPowerStat(powerstat: PowerStat):void{
    this.powerstatsChange.emit({hero: this.hero(), powerstat, value: -1});
  }

  incrementPowerStat(powerstat: PowerStat):void{
    this.powerstatsChange.emit({ hero: this.hero(), powerstat, value: 1 });
  }
}

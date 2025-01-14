import { Component } from '@angular/core';
import { HeroItemComponent } from "../hero-item/hero-item.component";

@Component({
  selector: 'app-hero-list',
  imports: [HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})
export class HeroListComponent {

}

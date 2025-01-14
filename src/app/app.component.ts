import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { HeroListComponent } from "./components/hero-list/hero-list.component";

@Component({
  selector: 'app-root',
  imports: [HeroItemComponent, HeroListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-proyecto';
}

import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent,HomeBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prolegacy-engineering-solutions';
}

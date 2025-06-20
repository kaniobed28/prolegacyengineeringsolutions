import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HeaderComponent } from './components/header/header.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prolegacy-engineering-solutions';
}
